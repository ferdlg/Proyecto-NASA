import { Box, Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';


const DataCard = ({ children }) => (
    <Card className="styled-card">
      <CardContent >
        {children}
        <Button variant="outlined">Ver mas</Button>
      </CardContent>
    </Card>
  );
export default DataCard;