// import {
//     FcBusinessContact,
//     FcCellPhone,
//     FcConferenceCall,
//     FcAlarmClock,
//   } from 'react-icons/fc';
  
  const styles = {
    container: {
      minHeight: 'calc(50vh - 50px)',
      minWidth: 'calc(50vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    title: {
      fontWeight: 700,
      fontSize: 40,
      textAlign: 'center',
      marginBottom: 20,
      color: '#333',
      textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)',
    },
  };
  
  const Home = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to Your Phonebook </h1>
        <p>
          Please <b>login</b> to access your contacts and <b>enjoy</b> not having to remember all of those by heart 
        </p>
      </div>
    );
  };
  
  export default Home;