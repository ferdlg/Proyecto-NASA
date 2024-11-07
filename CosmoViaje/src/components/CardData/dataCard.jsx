import { Box, Card, CardContent, Typography } from '@mui/material';

const DataCard = ({ children }) => (
    <Card className="styled-card">
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
export default DataCard;