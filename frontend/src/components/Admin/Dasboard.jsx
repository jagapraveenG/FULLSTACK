import React from 'react';

import { Row, Col, Panel, ButtonGroup, Button } from 'rsuite';
import BarChart from './BarChart';
import PieChart from './PieChart';
import DataTable from './DataTable';
import "./dash.css";
import CustomSideNav from './CustomSideNav';

// Updated data for boat bookings
const boatBookingData = [
  {
    name: 'Morning',
    data: [20, 25, 18, 22, 30, 28, 35] // Sample data for morning bookings
  },
  {
    name: 'Afternoon',
    data: [15, 18, 22, 20, 25, 17, 21] // Sample data for afternoon bookings
  },
  {
    name: 'Evening',
    data: [18, 20, 16, 19, 24, 22, 28] // Sample data for evening bookings
  }
];

const Dashboard = () => {
  return (
    
    <div style={{ width: '75' }}>
      <CustomSideNav />
      <div>
      <div style={{  marginLeft:'370px'}}>
      <Row gutter={30} className="dashboard-header" style={{ padding: '1vh' }}>
        <Col xs={8}>
          <Panel className="trend-box" style={{ background: "linear-gradient(to bottom, #FF243F, #FF501D)" }}>
            <img className="chart-img" src='src\images\pv.svg' alt="Events" />
            <div className="title">Boat</div>
            <div className="value">28,358</div>
          </Panel>
        </Col>
        <Col xs={8}>
          <Panel className="trend-box bg-gradient-green" style={{ background: "linear-gradient(to left, #00CDF1, #0075EE)" }}>
            <img className="chart-img" src='src\images\vv.svg' alt="Tickets sold" />
            <div className="title">booking</div>
            <div className="value">251,901</div>
          </Panel>
        </Col>
        <Col xs={8}>
          <Panel className="trend-box bg-gradient-blue" style={{ background: "linear-gradient(to right, #00D194, #00D1CD)" }}>
            <img className="chart-img" src='src\images\uv.svg' alt="Total Revenue" />
            <div className="title">Total Revenue booking</div>
            <div className="value">550,135</div>
          </Panel>
        </Col>
      </Row>

      {/* Display the boat bookings */}
      <Row gutter={30} style={{ padding: '1vh' }}>
        <Col xs={16}>
          <BarChart
            title="Boat Booking Summary"
            actions={
              <ButtonGroup>
                <Button active>Day</Button>
                <Button>Week</Button>
                <Button>Month</Button>
              </ButtonGroup>
            }
            data={boatBookingData} // Pass boat booking data to the BarChart component
            type="bar"
            labels={['2022-01-20', '2022-01-21', '2022-01-22', '2022-01-23', '2022-01-24', '2022-01-25', '2022-01-26']} // Sample labels for dates
          />
        </Col>
        <Col xs={8}>
          <PieChart
            title="Boat Categories"
            data={[25, 30, 20, 15, 10]} // Sample data for boat categories
            type="donut"
            labels={['Speedboats', 'Yachts', 'Fishing Boats', 'Catamarans', 'Others']} // Sample labels for boat categories
          />
        </Col>
      </Row>
      <Row gutter={30} style={{ padding: '1vh' }}>
        <Col xs={16}>
          <DataTable />
        </Col>
        <Col xs={8}>
          <PieChart
            title="Booking Locations"
            data={[5000, 2000, 3000, 1500, 1000]} // Sample data for booking locations
            type="pie"
            labels={['Marina Bay', 'Harbourfront', 'East Coast Park', 'Sentosa Cove', 'Others']} // Sample labels for booking locations
          />
        </Col>
      </Row>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
