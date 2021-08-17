import react from 'react';
import reactdom from 'react-dom';
import Card from './Cards';
import './index.css';
import data from './data';



reactdom.render(
<>
<h1 className="Top_heading">TOP 5 <span>NETFLIX</span> SERIES </h1>

{data.map((val)=>{
  return (
  <Card 
  key={val.id}
  imgsrc={val.imgsrc} 
  heading={val.heading}
  title={val.title}
  links={val.links}
/>
);
})}


<footer>ALL Right RESERVED @2020-21 <span>www.NETFLIX.com</span></footer>
</>,
  
  document.getElementById('root'));