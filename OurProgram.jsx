import React, { useRef } from "react";
import "./Ourprogram.css";

const Ourprogram = () => {
  return (
    <>
      <div className="ourprogramtext">
        <p>OUR PROGRAM</p>
        <h2>What we offer</h2>
      </div>

      <div className="programs">
        <div className="program">
          <img
            src="https://images.pexels.com/photos/12289462/pexels-photo-12289462.jpeg"
            alt=""
          />
          <div className="caption">
            <img
              src="https://w7.pngwing.com/pngs/739/4/png-transparent-graduation-ceremony-graduate-university-academic-degree-student-master-s-degree-student-thumbnail.png"
              alt=""
            />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program">
          <img
            src="https://media.licdn.com/dms/image/D4E12AQEo3TiMDoqU8g/article-cover_image-shrink_720_1280/0/1683298326444?e=2147483647&v=beta&t=n2aH0_MWlqmgz0wN2IvlKxB-lwMiqiPpA8oiKa3WH8M"
            alt=""
          />{" "}
          <div className="caption">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqM9kAG9Z0jywKYHhu70-rhJ5GItX-u5scj_EBkQ7HcKLORH3vP6DfN5MOBeMrprJTM6s&usqp=CAU"
              alt=""
            />
            <p>Master Degree</p>
          </div>
        </div>
        <div className="program">
          <img
            src="https://images.pexels.com/photos/7713513/pexels-photo-7713513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="caption">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGedThD7nF4fEP4o7tqgCC_z0C_NLRYP-Hw&s"
              alt=""
            />
            <p>Post Graduation</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourprogram;
