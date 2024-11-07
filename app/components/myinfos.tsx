import React from 'react';

const PersonalInfo: React.FC = () => {
  const personalData = {
    name: 'Andini Putri Kuswantina',
    birthDate: '26 Mei 2004',
    email: 'andiniputrikuswantina01@gmail.com',
    phone: '089501227224',
    address: 'Jl. Dipatiukur No.52 Cicalengka',
    occupation: 'Web Development',  // Memperbaiki typo: 'Depelopment' -> 'Development'
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Informasi Pribadi</h2>
      <ul style={styles.list}>
        {Object.entries(personalData).map(([key, value]) => (
          <li key={key} style={styles.listItem}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Roboto, sans-serif', // Pastikan font dimuat dengan benar
  },
  title: {
    color: 'teal',
    fontFamily: 'Roboto, sans-serif', // Pastikan font dimuat dengan benar
    fontWeight: '700', // Berat font lebih tebal
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
    color: 'black',
  },
};

export default PersonalInfo;
