import { Phone as PhoneIcon, Email as EmailIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

export default function ContactUsPage() {
    return (

        <div>
            <p style={{fontSize: 35, color: '#D2A857', textAlign: 'left', marginLeft: 200, marginTop: 130}}>Need to get in touch with us?</p>
            <div style={{backgroundColor: '#D2A857', borderRadius: 30, padding: 80, maxWidth: 700, marginLeft: 350}}>
                <Stack direction="row">
                    <PhoneIcon sx={{color: '#ffffff', fontSize: 80, paddingBottom: 5, paddingTop: 1}}></PhoneIcon>
                    <p style={{color: '#ffffff', fontSize: 30, paddingLeft: 150}}>+639452137124</p>
                </Stack>
                <Stack direction="row">
                    <EmailIcon sx={{color: '#ffffff', fontSize: 80, paddingBottom: 5, paddingTop: 2}}></EmailIcon>
                    <a href='mailto: teaminnovators@gmail.com' style={{color: '#ffffff', fontSize: 30, paddingLeft: 150, paddingTop: 30}}>teamyamyam@gmail.com</a>
                </Stack>  
                <Stack direction="row">
                    <LocationOnIcon sx={{color: '#ffffff', fontSize: 80, paddingTop: 2}}></LocationOnIcon>
                    <p style={{color: '#ffffff', fontSize: 30, paddingLeft: 150}}>7VVJ+QFR, Natalio B. Bacalso Ave, Cebu City, 6000 Cebu</p>
                </Stack>    
            </div>
        </div>
    )
}