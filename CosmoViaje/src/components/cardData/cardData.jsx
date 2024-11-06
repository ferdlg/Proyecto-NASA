import { Box, Card, CardContent, Typography } from '@mui/material';

const CardData = ({ children }) => (
    <Card className="styled-card">
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
export default CardData;