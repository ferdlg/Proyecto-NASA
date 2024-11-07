import { Box, Card, CardContent, Typography , Button} from '@mui/material';

const DataCard = ({ children }) => {
  return(
    <Card className="styled-card">
      <CardContent >
        {children}
      </CardContent>
    </Card>
  )
};

export default DataCard;