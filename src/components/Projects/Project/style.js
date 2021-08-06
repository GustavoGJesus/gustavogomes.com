import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    boxShadow: '0px 13px 27px -8px #A3A1A1',
  },
  media: {
    height: 0,
    paddingTop: '70.25%', // 16:9
   
    
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    
  },
  typographyStyleDescription:{
    color: '#161819',
    fontFamily: 'Poppins', 
    //marginTop: '15px',
    textAlign: 'center',
  },
  typographyStyleTitle : {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#161819',
    marginTop: '20px'
  }
  
}));