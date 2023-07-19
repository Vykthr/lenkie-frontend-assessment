import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';



export default function Logo({ disabledLink = false, sx, width = 30, height = 40 }) {

    const logo = (
        <Box sx={{ width: width, height: height, ...sx }} className="d-flex">
            <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="logo" style={{ margin: 'auto' }} />
        </Box>
    );

    if (disabledLink) {
        return <>{logo}</>;
    }

    return <RouterLink to="/">{logo}</RouterLink>;
}
