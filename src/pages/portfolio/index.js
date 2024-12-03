import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { useTranslation } from 'react-i18next';

export const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> {t('experience')} </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item" onClick={() => handleProjectClick(data)}>
                <img src={data.img} alt={data.title} />
                <div className="content">
                  <h3 className="project-title">{data.details[i18n.language]?.title}</h3>
                  <p>{t(data.description)}</p>
                  <button className="view-project-btn">{t('view_project')}</button>
                </div>
              </div>
            );
          })}
        </div>

        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          {selectedProject && selectedProject.details && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>
                  {selectedProject.details[i18n.language]?.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="project-details">
                  <div className="project-image">
                    <img src={selectedProject.img} alt={selectedProject.title} />
                  </div>
                  <div className="project-info">
                    <h4>{selectedProject.details[i18n.language]?.role}</h4>
                    <p className="duration">
                      <strong>{t('duration')}:</strong> {selectedProject.details[i18n.language]?.duration}
                    </p>
                    <p className="location">
                      <strong>{t('location')}:</strong> {selectedProject.details[i18n.language]?.location}
                    </p>
                    <p className="description">
                      {selectedProject.details[i18n.language]?.description}
                    </p>
                    <div className="responsibilities">
                      <h5>{t('responsibilities')}:</h5>
                      <ul>
                        {selectedProject.details[i18n.language]?.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  {t('close')}
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </HelmetProvider>
  );
};
