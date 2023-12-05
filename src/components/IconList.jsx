/* eslint-disable react/prop-types */
import '../styles/components/iconlist.sass'
const IconList = ({ icons  }) => {
  return (
    <ul>
      {icons.map((icon) => (
        <li key={icon.name}>
          <img src={icon.name}/>
        </li>
      ))}
    </ul>
  );
};


export default IconList 