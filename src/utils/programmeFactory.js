const programmeFactory = function(programmeName) {
  function PulpHandleClick(e) {
    e.preventDefault();

  }

  switch(programmeName) {
    case 'Pulp Fiction':
      return { title: 'Pulp Fiction', handleClick: () => {} };
    default:
      return null
  }
};

export default programmeFactory;