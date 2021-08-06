import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    
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
    justifyContent: 'space-between',
  },
  typographyStyleDescription:{
    color: '#161819',
    fontFamily: 'Poppins', 
    //marginTop: '15px',
  },
  typographyStyleTitle : {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#161819',
    marginTop: '20px'
  }
  
}));