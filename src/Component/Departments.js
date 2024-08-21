import React from 'react';
import { Card } from 'react-bootstrap';

const DepArray = [
  { departmentTitle: 'Pediatrics', departmentText: 'Our main goal is to help our little patients', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img01.jpg' },
  { departmentTitle: 'Cardiology', departmentText: 'Heart health is disordersour priority', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img02.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img04.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img05.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img06.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img07.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img08.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img03.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img03.jpg' },

];

function Department({ departmentTitle, departmentText, departmentImg }) {
  return (
    
    <div className="col-md-4 mb-1">
      <Card id='cardd' style={{ width: '20rem', border: 'none' }}>
        <Card.Img  id="cardimg"variant="top" src={departmentImg} />
        <Card.Body>
          <Card.Title id='cardtitle'>{departmentTitle}</Card.Title>
          <Card.Text id="cardtext">{departmentText}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function DepartmentList() {
  return (
    
      <div className="department-header">
    <img id='soraheader' src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-content-bg02.jpg"/>

      <div className="row">
        {DepArray.map((depar, index) => (
          <Department {...depar} key={index} />
        ))}
      </div>
    </div>
  );
}

export default DepartmentList;
