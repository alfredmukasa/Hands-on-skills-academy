import React, { useState, useEffect } from 'react';
import './Gallery.css';

const GALLERY_ITEMS = [
    {
        id: 1,
        category: 'Mining',
        title: 'Underground Excavation',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuQMUy2ccY9ofeV6fhsxnp0W0N2aN7nCci_Clza-oi9F48zjyIwWwYD3j7v4UPry1DxNX9hkGSWevKqLR6sd6xcO4E6g5Vv3i4Q9pKJEq93jquBxE9Mxt8veMp7Li9my5zCU2yJwvL3rNNhL4z78n5tik0zls09BIjvbHbQzyzmS9uTvd8HmXX76ofHv2XELA7tc4S07umNQ4K2-6nGNC5cq3edJZCxk6hyZYHlQt0EXvUjRdi8ukMoIgedCjRw80gXa3f5GJRCA9k',
        size: 'tall'
    },
    {
        id: 2,
        category: 'Engineering',
        title: 'Robotics Lab',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG7ISRoiEFQL1hlGvPUDatV1n9x7ik4nmUi3wKZacNqLXIckYV8q6RkcMc3D5AGZovrj-ukomGpwPuwFggR6yy3qpkmtjoNVGDks4aDaePgyYZfuPhF9kCoJ9wC8kOmFBwj39uoe7uka1jqDxW_YdhBRT3SXaz8QfkcNBjxcA-jGkBONPYM91cJHx-d6dWloEoMfJ5Y3UCaU0BnfZJUPKETgg0IzObcLE6PY4vKHtE1rZfXz-BlmNQs-eAGvN9igpYuIh9EUTc5Fby',
        size: 'medium'
    },
    {
        id: 3,
        category: 'Student Life',
        title: 'Design Thinking',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDszZK9XhCEGwGQr4eFTdwIZg12KdD0t_gXYuMcHQxcDuEuHFuGaIyH3Vt55hkZk6dpZXKiCYGYzwwx9IYEd2r-84KRGlXcMzzDiZ61eHsECkXUA3xE8CzQ0BJhfziMn6CpAxInwmXz3p2rMfQGF1M5rgQYy7EfYdvZJhTzuL5P0WfA-cmsE5YOc1lkrIenuuoJi3Rq9FesznKE9wRCCKqilaggfdKHbZ0qW3T7FAXM_0qHUcShQ-her31ImsSjp0h8FLo7Jd2gjF8T',
        size: 'short'
    },
    {
        id: 4,
        category: 'NATED',
        title: 'Chemical Processing',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCRvpKf130F5I1IXByw5bNjBeMCumNGvHOHQVQoqBZ2CrGs8QcejKvBMtKHD-psAkeFrmYNkr-0yDGLVUfcF0XU5VTrr0WpGQzlXWYpoz8wHcSRFyJumW0vYNZPLui_oGUk78e6ToR-sKZKpMAE9luR4dO9l2jHrcX36AKAydn8NeY3ryuDaDnsY82yH8lFsM6m9zrFzuZYUYdZjX5avycuJOoNimrlBMHTTrNnN-SRi-9P2kKdWyaFkZuU8nGzNlxJPMziw5KHypz',
        size: 'medium'
    },
    {
        id: 5,
        category: 'Engineering',
        title: 'Precision Welding',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlwP6VSTIr2keAoQlkFlSmmgNSJDLL8V2jRnZ0wbSAPDuIOqN-oMkMsDsMRRT5ePIeqNC3UARPaP8leY7lW0qPC8BbkrIg-zN35AHpulDrUcL_W9YfpqMPHKZOG78xZikliyBCt-ibQPwR3lFlpgdEqZkkP-UzwR69nOc5oNDAK6d4t-EszbiLnI34N-YvlcQEqgKTZfJybQNtEQ5TYJyco_W-od0O7ySOqOQ7xY-I5WUD0-Cg8W2U1WnmMkmGJKI2lrtffBjW7KEn',
        size: 'tall'
    },
    {
        id: 6,
        category: 'Safety',
        title: 'Standard Protocols',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC055_eeuC1jaaWOSolxEvuffMt4ag9NqPvl3DKtnneiFWw--bK8r_ejvKrdZPUdkY0OZvXb_1_LdzsTeqbFcjcm8rXEkiC57lxm-BcsU0jPHqEN7QuzW8HDqQ_gnmCcdNIAk6voLeMN6Oe2vDsljk0HAYPp_PAzePHe97F0XBON4iyQ0XQRsKXbJOHb7Ea0_033DFVg3xkfpywIxvvqm6AdDkwq_s5PUC5Fk82FGYgfvLEhcHQvH-taJR5HTyk1BFcecFp3BlwN4wV',
        size: 'short'
    }
];

const CATEGORIES = ['All', 'Mining', 'NATED', 'Engineering', 'Student Life', 'Safety'];

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [items, setItems] = useState(GALLERY_ITEMS);

    useEffect(() => {
        if (filter === 'All') {
            setItems(GALLERY_ITEMS);
        } else {
            setItems(GALLERY_ITEMS.filter(item => item.category === filter));
        }
    }, [filter]);

    return (
        <div className="gallery-page">
            {/* Atmospheric Background Orbs */}
            <div className="gallery-orb orb-1" />
            <div className="gallery-orb orb-2" />
            <div className="gallery-orb orb-3" />

            <div className="gallery-container">
                {/* Title & Filter Section */}
                <header className="gallery-header">
                    <div className="section-tag" style={{ margin: '0 auto 16px' }}>Visual Excellence</div>
                    <h1>Skills <span className="text-primary">Gallery</span></h1>
                    <p>
                        Visualizing the next generation of industrial excellence. From deep-earth mining to precision engineering.
                    </p>

                    {/* Glassmorphic Filter Bar */}
                    <div className="filter-bar">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                {/* Masonry Grid */}
                <div className="masonry-grid">
                    {items.map(item => (
                        <div key={item.id} className={`gallery-card card-${item.size}`}>
                            <img src={item.image} alt={item.title} />
                            <div className="caption-overlay">
                                <div className="caption-info">
                                    <span>{item.category}</span>
                                    <h3>{item.title}</h3>
                                </div>
                                <span className="material-symbols-outlined caption-icon">arrow_outward</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Section */}
                <div className="load-more-wrap">
                    <button className="btn-gallery-load">
                        Load More Projects
                        <span className="material-symbols-outlined">autorenew</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
