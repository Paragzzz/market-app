import React from "react";
import "./Home.css";

const categories = [
  {
    id: 1,
    title: "Salon",
    text: "Professional salon services.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__L4yhxT1Fw8ljWUMlLaBdOOza2_AwspGVw&s",
  },
  {
    id: 2,
    title: "Spa",
    text: "Relaxing spa treatments.",
    img: "https://plus.unsplash.com/premium_photo-1661274139149-7efb00e27f67?fm=jpg&q=60&w=3000",
  },
  {
    id: 3,
    title: "Makeup",
    text: "Makeup for every occasion.",
    img: "https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305147.jpg?semt=ais_incoming&w=740&q=80",
  },
  {
    id: 4,
    title: "Barber",
    text: "Expert barber services.",
    img: "https://www.josephguinbarber.com/uploads/1/2/4/4/124499791/josephguinhome_orig.jpg",
  },
];

const toppers = [
  { id: 1, name: "Ram Mehta", field: "Barber", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRyJIrgi8JOc4fGqAnKh1e8h__qJJk9wBmYMMSTAugAxbSiE0i92fsO_5Ftq-D2uJLrBSHtUuiutpAJ8J3z4qvEPPsn4ZafBeKdcrFSWA" },
  { id: 2, name: "Sita Patel", field: "Makeup Artist", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnoOEb-tfa9Uhet37lokOzp4QgaM3M0skROXdNU22AIwmQlGx1L6ArLyrBYNuUthT8Y5xAoYg_bshDqUNvHahZdii5uf77GBjm7ef" },
  { id: 3, name: "John Doe", field: "Spa Specialist", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XVQMucjETlxGOdXwvwe1JQBVgopq5HySkcpHjJ2kM2l0QX0wZVs_Hh-1eL6xRvv7GhGNVeNhUg5iRlqSk4qU_Mzw83pncBMg0sIM_is" },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero d-flex align-items-center justify-content-center">
        <div className="hero-content text-center">
          <h1 className="hero-title">Welcome to OpenMarket</h1>
          <p className="hero-subtitle">Discover professionals for all your needs</p>
          <div className="search-box">
            <input type="text" placeholder="Search for services..." />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section container mt-5">
        <h2 className="section-title">Categories</h2>
        <div className="row g-4">
          {categories.map(cat => (
            <div className="col-sm-6 col-md-3" key={cat.id}>
              <div className="card glass-card tilt-card">
                <img src={cat.img} alt={cat.title} className="card-img" />
                <div className="card-body text-center">
                  <h5>{cat.title}</h5>
                  <p>{cat.text}</p>
                  <button className="btn neon-btn">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Professionals Section */}
      <section className="toppers-section container mt-5">
        <h2 className="section-title">Top Professionals</h2>
        <div className="row g-4">
          {toppers.map(top => (
            <div className="col-sm-6 col-md-4" key={top.id}>
              <div className="card glass-card tilt-card">
                <img src={top.img} alt={top.name} className="card-img rounded-circle" />
                <div className="card-body text-center">
                  <h5>{top.name}</h5>
                  <p>{top.field}</p>
                  <button className="btn neon-btn">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center mt-5">
        <p>© {new Date().getFullYear()} OpenMarket. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
