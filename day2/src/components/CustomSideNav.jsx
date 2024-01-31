import React, { useState } from 'react';
import { Sidenav, Nav, Toggle, Modal, Button } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import './SideNav.css';
import ExitIcon from '@rsuite/icons/Exit';
import { NavLink } from 'react-router-dom';

const CustomSideNav = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');
  const [showZoomModal, setShowZoomModal] = useState(false);

  const adminInfo = {
    name: 'Admin User',
    imageUrl: "data:image/jpeg;base64,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" // Replace with the actual image URL
  };

  const handleZoomClick = () => {
    setShowZoomModal(true);
  };

  const closeModal = () => {
    setShowZoomModal(false);
  };

  return (
    <div className="custom-sidenav-container">
      <div className="admin-info">
        <img
          src={adminInfo.imageUrl}
          alt="Admin"
          className="admin-image"
          onClick={handleZoomClick}
        />
        <div className="admin-name">{adminInfo.name}</div>
      </div>
      <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      />
      <hr />
      <Sidenav
        appearance="subtle"
        expanded={expanded}
        defaultOpenKeys={['3', '4']}
        style={{ backgroundColor: '#1d1d1d', color: 'white' }}
      >
        <Sidenav.Body style={{ backgroundColor: '#1d1d1d', color: 'white' }}>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              <NavLink to={'/team'}>Manage Team</NavLink>
            </Nav.Item>
            <Nav.Menu placement="rightStart" eventKey="3" title="Courses" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1"><NavLink to={'/postcourse'}>Post Boat</NavLink></Nav.Item>
              <Nav.Item eventKey="3-2"><NavLink to={'/deletecourse'}>Delete Boat</NavLink></Nav.Item>
              <Nav.Item eventKey="3-3"><NavLink to={'/editcourse'}>Edit Boat</NavLink></Nav.Item>
              <Nav.Item eventKey="3-4"><NavLink to={'/view'}>View Boat</NavLink></Nav.Item>
            </Nav.Menu>
            <Nav.Menu placement="rightStart" eventKey="4" title="Enquires" icon={<GearCircleIcon />}>
              {/* <Nav.Item eventKey="4-1"><NavLink to={'/view/enquiry'}>View All Enquires</NavLink></Nav.Item> */}
              {/* <Nav.Item eventKey="4-3">Versions</Nav.Item> */}
              <Nav.Menu eventKey="4-5" title="Payment">
                <Nav.Item eventKey="4-5-1"> <NavLink to={'/transaction'}>View All Transaction</NavLink></Nav.Item>
                <Nav.Item eventKey="4-5-2">Revenue Generated</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
              <Nav.Item eventKey="1" icon={<ExitIcon />}>
            <NavLink to={'/login'}>Logout</NavLink>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>

      {/* Zoom Modal */}
      <Modal show={showZoomModal} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Zoomed Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={adminInfo.imageUrl} alt="Admin" style={{ width: '100%' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} appearance="primary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomSideNav;