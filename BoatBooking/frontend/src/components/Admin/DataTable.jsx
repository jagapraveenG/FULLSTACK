import { Table, Panel } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

const boatBookingData = [
  {
    id: 1,
    boatName: 'Speedboat 1',
    date: '2022-05-15',
    bookedBy: 'John Doe',
    location: 'Marina Bay'
  },
  {
    id: 2,
    boatName: 'Luxury Yacht 1',
    date: '2022-06-20',
    bookedBy: 'Alice Smith',
    location: 'Harbourfront'
  },
  {
    id: 3,
    boatName: 'Fishing Boat 1',
    date: '2022-07-10',
    bookedBy: 'Michael Johnson',
    location: 'East Coast Park'
  },
  {
    id: 4,
    boatName: 'Catamaran 1',
    date: '2022-08-10',
    bookedBy: 'Emma Brown',
    location: 'Sentosa Cove'
  },
  // Add more boat booking data as needed
];

const DataTable = () => {
  return (
    <Panel className="card" header="Upcoming Boat Bookings">
      <Table height={300} data={boatBookingData} rowKey="id">
        <Column flexGrow={1} minWidth={100}>
          <HeaderCell>BOAT NAME</HeaderCell>
          <Cell>
            {rowData => (
              <a href="#" onClick={() => handleBookingClick(rowData)}>{rowData.boatName}</a>
            )}
          </Cell>
        </Column>

        <Column width={130}>
          <HeaderCell>DATE</HeaderCell>
          <Cell dataKey="date" />
        </Column>

        <Column flexGrow={1} minWidth={100}>
          <HeaderCell>BOOKED BY</HeaderCell>
          <Cell dataKey="bookedBy" />
        </Column>

        <Column flexGrow={1} minWidth={100}>
          <HeaderCell>LOCATION</HeaderCell>
          <Cell dataKey="location" />
        </Column>
      </Table>
    </Panel>
  );
};

const handleBookingClick = rowData => {
  // Add logic for handling click on boat booking
  console.log('Boat booking clicked:', rowData.boatName);
};

export default DataTable;
