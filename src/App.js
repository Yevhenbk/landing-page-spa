import './App.css';
import card1 from "./public/image2.jpg";
import card2 from "./public/card2.png";
import group1 from "./public/Group1.png";
import bathspa from "./public/bathspa.jpg";
import bodyspa from "./public/bodyspa.jpg";
import handsspa from "./public/handsspa.jpg";
import peelingspa from "./public/peelingspa.jpg";
import vector from "./public/vector.png";
import bacleft from "./public/BackgroundLeft.png";
import bacleftc from "./public/BackgroundCopyLeft.png";
import bacright from "./public/BackgroundRight.png";
import bacrightc from "./public/BackgroundCopyRight.png";

function App() {
  return (
    <div className="holder">
      <section className="section-one">
        <div className="interactive-nav">
        <div className="nav-second">
            {/* <img src={vector} className="nav-sec-img"/> */}
          </div>
          <div className="nav-first">
            {/* <img src={bacrightc} className="nav-third-img-one"/>
            <img src={bacright} className="nav-third-img-two"/> */}
          </div>
          
          <div className="nav-third">
            {/* <img src={bacleftc} className="nav-first-img-one"/>
            <img src={bacleft} className="nav-first-img-two"/> */}
          </div>
        </div>
        <p className="p-tag">
                  ג'יימס ריצ'רדסון דיוטי פרי מזמינה אתכם 
          להביא את הספא הביתה עם מגוון מוצרים מפנקים של 
          מותגי הטיפוח המובילים: 
          ריטואלס, מולטון בראון, קלרינס, ויקטוריה סיקרטס
        </p>
        <p className="p-tag-second">כל המידע הכי מעניין על מוצרי ספא וטיפוח מהבלוגרים המובילים</p>
        <div className="cards">
          <div className="card-one-holder">
            <div className="card-one">
              <img src={card1} alt="" className="card-img"/>
              <p className="card-p">
                למה סרום 
                נחשב 
                לרולס רויס 
                של מוצרי 
                הטיפוח?
              </p>
            </div>
            <a href="#" alt="Link will be supplied later" className="card-link">לכתבה המלאה {'>>'}</a>
          </div>
          <div className="card-two-holder">
          <div className="card-two">
              <img src={card2} alt="" className="card-img-sec"/>
              <p className="card-p-second">
                ריטואל שכולו ספא:
                5 מוצרי טיפוח 
                מפנקים ומשתלמים 
                שאת חייבת להכיר
              </p>
            </div>
            <a href="https://smalltalk.dutyfree.co.il/ריטואל-שכולו-ספא-5-מוצרי-טיפוח-מפנקים-ו/" alt="" className="card-link-two" target="_blank">לכתבה המלאה {'>>'}</a>
          </div>
        </div>
        <div className="promo-holder">
          <p className="p-tag">מגוון מוצרי טיפוח בהטבה מיוחדת:</p>
          <img src={group1} alt="" className="group-img"/>
        </div>
      </section>
      <section className="section-two">
        <div className="cards-section-two">
          <div className="cards-order">
            <div className="sec-two-card">
            <img src={bodyspa} alt="" className="img-card-two"/>
            <a href="https://www.dutyfree.co.il/jr_spa/body" alt="" className="card-link" target="_blank">לכל המוצרים {'>>'}</a>
          </div>
          <div className="sec-two-card">
            <img src={bathspa} alt="" className="img-card-two"/>
            <a href="https://www.dutyfree.co.il/jr_spa/bath" alt="" className="card-link" target="_blank">לכל המוצרים {'>>'}</a>
          </div>
          </div>
          <div className="cards-order">
          <div className="sec-two-card">
            <img src={peelingspa} alt="" className="img-card-two"/>
            <a href="https://www.dutyfree.co.il/jr_spa/peeling" alt="" className="card-link" target="_blank">לכל המוצרים {'>>'}</a>
          </div>
          <div className="sec-two-card">
            <img src={handsspa} alt="" className="img-card-two"/>
            <a href="https://www.dutyfree.co.il/jr_spa/hands" alt="" className="card-link" target="_blank">לכל המוצרים {'>>'}</a>
          </div>
          </div>
        </div>
        <p className="footer-base">הזול מביניהם | מהפריטים המשתתפים המסומנים במדבקת המבצע | אין כפל הטבות</p>
      </section>
    </div>
  );
}

export default App;
