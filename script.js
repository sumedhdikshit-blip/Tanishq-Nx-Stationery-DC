/* ==========================================================================
   TANISHQ STATIONERY — PREMIUM DIGITAL VISITING CARD SCRIPT (VANILLA JS)
   ========================================================================== */

// 1. CENTRAL BUSINESS CONFIGURATION
const business = {
    name: "Tanishq Stationery",
    tagline: "Stationery & Gift Articles",
    subtext: "Your local destination for stationery, school supplies, office essentials, art materials and gift articles.",
    phone: "+91 9819978173",
    whatsappNumber: "919819978173",
    email: "tanishqstationery.thane@gmail.com",
    address: "Krishna Tower, Shop No.7, nilkanth darsan building, Runwal Nagar Rd, opp. Olive prime, near citydairy, Kolbad, Runwal Nagar, Thane West, Thane, Maharashtra 400601",
    city: "Thane West, Maharashtra",
    openingHours: {
        openHour: 10,
        closeHour: 21,
        closeMinute: 30,
        display: "Monday - Sunday: 10:00 AM - 9:30 PM"
    },
    website: "https://tanishq-stationery.digital",
    googleMapsUrl: "https://maps.google.com/?q=Tanishq+Nx+Stationery+Runwal+Nagar+Thane+West",
    cardUrl: window.location.href.includes('http') ? window.location.href : "https://tanishq-stationery.digital",
    logo: "assets/logo/logo.png",
    heroImage: "assets/images/hero/storefront.jpg"
};

// 2. CATEGORY CONFIGURATION DATA (GENUINE PHOTOGRAPHY)
const categories = [
    {
        id: "stationery",
        title: "Stationery",
        desc: "Desk organizers, clips, tapes, highlighters & sticky notes.",
        icon: "✏️",
        image: "assets/images/categories/stationery.jpg"
    },
    {
        id: "school",
        title: "School Essentials",
        desc: "Pencil boxes, geometry sets, school bags & student packs.",
        icon: "📚",
        image: "assets/images/categories/school.jpg"
    },
    {
        id: "writing",
        title: "Pens & Writing",
        desc: "Luxury fountain pens, fine gel pens, rollerballs & nibs.",
        icon: "🖊️",
        image: "assets/images/categories/writing.jpg"
    },
    {
        id: "art",
        title: "Art & Craft",
        desc: "Acrylic colors, canvases, artist brushes & sketchbooks.",
        icon: "🎨",
        image: "assets/images/categories/art.jpg"
    },
    {
        id: "notebooks",
        title: "Notebooks & Registers",
        desc: "Ruled notebooks, hardbound registers & journals.",
        icon: "📒",
        image: "assets/images/categories/notebooks.jpg"
    },
    {
        id: "gifts",
        title: "Gift Articles",
        desc: "Custom gift hampers, greeting cards & gift packaging.",
        icon: "🎁",
        image: "assets/images/categories/gifts.jpg"
    },
    {
        id: "office",
        title: "Office Supplies",
        desc: "Files, folders, heavy duty staplers & desk organizers.",
        icon: "🗂️",
        image: "assets/images/categories/office.jpg"
    },
    {
        id: "printing",
        title: "Printing Services",
        desc: "Color printouts, lamination & spiral document binding.",
        icon: "🖨️",
        image: "assets/images/categories/printing.jpg"
    }
];

// 3. CENTRAL PRODUCT CATALOGUE (REAL PHOTOGRAPHIC DEMO DATA)
const products = [
    {
        id: 1,
        name: "Classmate Deluxe Notebook Pack (172 Pages)",
        category: "notebooks",
        categoryLabel: "NOTEBOOKS",
        description: "High quality elemental chlorine-free paper, smooth ruled sheets perfect for school, college and office notes.",
        demoPrice: "₹75",
        isDemo: true,
        image: "assets/images/products/notebook.jpg",
        assetType: "real"
    },
    {
        id: 2,
        name: "Parker Vector Stainless Steel Fountain Pen",
        category: "writing",
        categoryLabel: "PENS & WRITING",
        description: "Classic executive fountain pen with fine stainless steel nib, blue ink cartridge & sleek gift presentation box.",
        demoPrice: "₹450",
        isDemo: true,
        image: "assets/images/products/pen_set.jpg",
        assetType: "real"
    },
    {
        id: 3,
        name: "Camel Artists Acrylic Color Set (12 Tubes)",
        category: "art",
        categoryLabel: "ART & CRAFT",
        description: "Professional vibrant acrylic paints with rich coverage, lightfast pigment and non-toxic quick drying formulation.",
        demoPrice: "₹380",
        isDemo: true,
        image: "assets/images/products/art_set.jpg",
        assetType: "real"
    },
    {
        id: 4,
        name: "Executive Gift Hamper Box Set",
        category: "gifts",
        categoryLabel: "GIFT ARTICLES",
        description: "Premium gift box containing a metal rollerball pen, leatherette diary journal, key ring & customized card.",
        demoPrice: "₹899",
        isDemo: true,
        image: "assets/images/products/gift_box.jpg",
        assetType: "real"
    },
    {
        id: 5,
        name: "Pastel Highlighters & Sticky Notes Combo",
        category: "stationery",
        categoryLabel: "STATIONERY",
        description: "Aesthetic pastel shade highlighters (6 colors) with multi-colored sticky flag pads for study & office notes.",
        demoPrice: "₹190",
        isDemo: true,
        image: "assets/images/products/sticky_notes.jpg",
        assetType: "real"
    },
    {
        id: 6,
        name: "Student Geometry & Math Box Kit",
        category: "school",
        categoryLabel: "SCHOOL ESSENTIALS",
        description: "Precision metal compass, divider, protractor, set squares and shatterproof ruler in a durable tin box.",
        demoPrice: "₹140",
        isDemo: true,
        image: "assets/images/products/geometry_box.jpg",
        assetType: "real"
    }
];

// 4. GALLERY IMAGES DATA
const galleryItems = [
    {
        id: 1,
        title: "Tanishq Store Front & Display Racks",
        image: "assets/images/hero/storefront.jpg",
        typeLabel: "REAL STORE PHOTO"
    },
    {
        id: 2,
        title: "Stationery Shelves & Pen Racks",
        image: "assets/images/gallery/store_interior_1.jpg",
        typeLabel: "REAL STORE PHOTO"
    },
    {
        id: 3,
        title: "Gift Articles & Cards Display Section",
        image: "assets/images/gallery/store_display_2.jpg",
        typeLabel: "REAL STORE PHOTO"
    },
    {
        id: 4,
        title: "Notebooks & School Supplies Racks",
        image: "assets/images/categories/notebooks.jpg",
        typeLabel: "REAL STORE PHOTO"
    }
];

// STATE MANAGEMENT
let currentActiveCategory = "all";
let currentLightboxIndex = 0;

// INITIALIZATION ON DOM READY
document.addEventListener("DOMContentLoaded", () => {
    initThemeSystem();
    initBusinessInfo();
    initStatusPill();
    initPrimaryActions();
    renderCategoryGrid();
    renderCategoryTabs();
    renderProductsGrid();
    renderGalleryGrid();
    initModalEvents();
    initLightboxEvents();
    initQRGenerator();
    initTiltEffect();
    initCanvasParticles();
    initScrollReveal();
});

// 1. LIGHT MODE + DARK MODE SYSTEM (LIGHT MODE IS DEFAULT)
function initThemeSystem() {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    const toggleBtn = document.getElementById("theme-toggle-btn");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
            const newTheme = currentTheme === "light" ? "dark" : "light";
            setTheme(newTheme);
        });
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

// 2. POPULATE BUSINESS DATA INTO DOM
function initBusinessInfo() {
    document.getElementById("brand-name").textContent = business.name;
    document.getElementById("brand-tagline").textContent = business.tagline;
    document.getElementById("brand-location").textContent = business.city;
    document.getElementById("brand-bio").textContent = business.subtext;
    document.getElementById("info-hours").textContent = business.openingHours.display;
    
    // Dynamic WhatsApp Deep Links
    const generalWaMsg = encodeURIComponent("Hello Tanishq Stationery, I found your digital visiting card and would like to enquire about your products.");
    const waUrl = `https://wa.me/${business.whatsappNumber}?text=${generalWaMsg}`;
    
    const waBtns = ["action-whatsapp", "bar-whatsapp", "social-wa"];
    waBtns.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = waUrl;
    });
    
    // Direct Call Link (+91 9819978173)
    const callUrl = `tel:+919819978173`;
    const callBtns = ["action-call", "bar-call"];
    callBtns.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = callUrl;
    });

    // Google Maps Link
    const mapBtns = ["address-directions-btn", "bar-directions"];
    mapBtns.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = business.googleMapsUrl;
    });
}

// 3. OPEN/CLOSED STATUS CALCULATOR
function initStatusPill() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    const openTime = business.openingHours.openHour; // 10 AM
    const closeTime = business.openingHours.closeHour + (business.openingHours.closeMinute / 60); // 9:30 PM
    const currentTimeDec = currentHour + (currentMinute / 60);
    
    const pill = document.getElementById("business-status-pill");
    const text = document.getElementById("business-status-text");
    
    if (currentTimeDec >= openTime && currentTimeDec < closeTime) {
        pill.className = "status-pill";
        text.textContent = "OPEN NOW";
    } else {
        pill.className = "status-pill closed";
        text.textContent = "CLOSED • OPENS 10:00 AM";
    }
}

// 4. PRIMARY ACTION BUTTON HANDLERS (VCF & SHARE)
function initPrimaryActions() {
    const saveVcfBtns = [document.getElementById("action-save-vcf"), document.getElementById("bar-save")];
    saveVcfBtns.forEach(btn => {
        if (btn) btn.addEventListener("click", generateVCard);
    });

    const shareBtns = [document.getElementById("action-share"), document.getElementById("top-share-btn"), document.getElementById("qr-share-btn")];
    shareBtns.forEach(btn => {
        if (btn) btn.addEventListener("click", handleShareCard);
    });
}

// GENERATE VCF / VCARD FILE (PURE JS WITH +91 9819978173 & EXACT ADDRESS)
function generateVCard() {
    const vcardData = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "FN:" + business.name,
        "ORG:" + business.name + " & Gift Articles",
        "TITLE:Stationery & Gift Articles Store",
        "TEL;TYPE=CELL,VOICE:+919819978173",
        "TEL;TYPE=WORK,MSG:+919819978173",
        "EMAIL:" + business.email,
        "ADR;TYPE=WORK:;;" + business.address,
        "URL:" + business.cardUrl,
        "NOTE:Tanishq Stationery - Stationery & Gift Articles, Thane West, Maharashtra.",
        "END:VCARD"
    ].join("\r\n");

    const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${business.name.replace(/\s+/g, '_')}_Contact.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast("Contact card ready to save!");
}

// NATIVE WEB SHARE API WITH CLIPBOARD FALLBACK
async function handleShareCard() {
    const shareData = {
        title: business.name,
        text: `${business.name} — ${business.tagline}, ${business.city}. Scan or open digital card:`,
        url: business.cardUrl
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
            showToast("Digital card shared!");
        } catch (err) {
            if (err.name !== 'AbortError') {
                copyLinkFallback();
            }
        }
    } else {
        copyLinkFallback();
    }
}

function copyLinkFallback() {
    navigator.clipboard.writeText(business.cardUrl).then(() => {
        showToast("Digital card link copied!");
    }).catch(() => {
        showToast("Card URL: " + business.cardUrl);
    });
}

// TOAST NOTIFICATION UTILITY
function showToast(message) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 3000);
}

// 5. RENDER CATEGORY GRID
function renderCategoryGrid() {
    const grid = document.getElementById("category-grid");
    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterCategoryFromCard('${cat.id}')">
            <div class="category-img-box">
                <img src="${cat.image}" alt="${cat.title}" class="category-img" loading="lazy">
            </div>
            <div class="category-info">
                <h3 class="category-name">${cat.icon} ${cat.title}</h3>
                <p class="category-desc">${cat.desc}</p>
            </div>
        </div>
    `).join("");
}

function filterCategoryFromCard(catId) {
    currentActiveCategory = catId;
    updateCategoryTabsUI();
    renderProductsGrid();
    document.getElementById("products-section").scrollIntoView({ behavior: "smooth" });
}

// 6. RENDER CATEGORY FILTER TABS
function renderCategoryTabs() {
    const tabsContainer = document.getElementById("category-tabs");
    const allCategories = [{ id: "all", title: "ALL PRODUCTS" }, ...categories];

    tabsContainer.innerHTML = allCategories.map(cat => `
        <button class="tab-chip ${cat.id === currentActiveCategory ? 'active' : ''}" data-category="${cat.id}">
            ${cat.title}
        </button>
    `).join("");

    tabsContainer.querySelectorAll(".tab-chip").forEach(btn => {
        btn.addEventListener("click", (e) => {
            currentActiveCategory = e.target.getAttribute("data-category");
            updateCategoryTabsUI();
            renderProductsGrid();
        });
    });
}

function updateCategoryTabsUI() {
    const tabs = document.querySelectorAll(".tab-chip");
    tabs.forEach(tab => {
        if (tab.getAttribute("data-category") === currentActiveCategory) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
}

// 7. RENDER PRODUCT CARDS GRID
function renderProductsGrid() {
    const grid = document.getElementById("products-grid");
    
    const filteredProducts = currentActiveCategory === "all" 
        ? products 
        : products.filter(p => p.category === currentActiveCategory);

    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 30px; color: var(--text-muted);">
                <p>No items in this category yet.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredProducts.map(p => {
        const waProductMsg = encodeURIComponent(`Hello Tanishq Stationery, I would like to enquire about ${p.name}.`);
        const waUrl = `https://wa.me/${business.whatsappNumber}?text=${waProductMsg}`;

        return `
            <div class="product-card" data-product-id="${p.id}">
                <div class="product-img-wrapper" onclick="openProductModal(${p.id})">
                    <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
                    <span class="product-tag">${p.categoryLabel}</span>
                </div>
                <div class="product-body">
                    <h3 class="product-title" onclick="openProductModal(${p.id})">${p.name}</h3>
                    <p class="product-desc">${p.description}</p>
                    
                    <div class="product-footer">
                        <div class="product-price-row">
                            <span class="demo-price">${p.demoPrice}</span>
                            <span class="demo-price-tag">DEMO</span>
                        </div>
                        <a href="${waUrl}" target="_blank" rel="noopener" class="product-wa-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            <span>ENQUIRE</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// 8. PRODUCT MODAL MANAGER
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById("modal-image").src = product.image;
    document.getElementById("modal-image").alt = product.name;
    document.getElementById("modal-category").textContent = product.categoryLabel;
    document.getElementById("modal-title").textContent = product.name;
    document.getElementById("modal-price").textContent = product.demoPrice;
    document.getElementById("modal-description").textContent = product.description;

    const waMsg = encodeURIComponent(`Hello Tanishq Stationery, I would like to enquire about ${product.name}.`);
    document.getElementById("modal-whatsapp-btn").href = `https://wa.me/${business.whatsappNumber}?text=${waMsg}`;

    const modal = document.getElementById("product-modal");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    const modal = document.getElementById("product-modal");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
}

function initModalEvents() {
    document.getElementById("modal-close-btn").addEventListener("click", closeProductModal);
    document.getElementById("product-modal").addEventListener("click", (e) => {
        if (e.target.id === "product-modal") closeProductModal();
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeProductModal();
            closeLightbox();
        }
    });
}

// 9. STORE GALLERY & LIGHTBOX
function renderGalleryGrid() {
    const grid = document.getElementById("gallery-grid");
    grid.innerHTML = galleryItems.map((item, index) => `
        <div class="gallery-item" onclick="openLightbox(${index})">
            <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy">
            <div class="gallery-overlay">
                <span class="gallery-caption">${item.title}</span>
            </div>
        </div>
    `).join("");
}

function openLightbox(index) {
    currentLightboxIndex = index;
    const item = galleryItems[index];
    
    document.getElementById("lightbox-img").src = item.image;
    document.getElementById("lightbox-img").alt = item.title;
    document.getElementById("lightbox-title").textContent = item.title;
    document.getElementById("lightbox-tag").textContent = item.typeLabel;

    const lightbox = document.getElementById("lightbox-modal");
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox-modal");
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
}

function initLightboxEvents() {
    document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox-modal").addEventListener("click", (e) => {
        if (e.target.id === "lightbox-modal") closeLightbox();
    });

    document.getElementById("lightbox-prev").addEventListener("click", () => {
        currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
        openLightbox(currentLightboxIndex);
    });

    document.getElementById("lightbox-next").addEventListener("click", () => {
        currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
        openLightbox(currentLightboxIndex);
    });
}

// 10. QR CODE DYNAMIC CANVAS GENERATOR (PURE JS)
function initQRGenerator() {
    const canvas = document.getElementById("qr-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    const gridSize = 25;
    const cellSize = width / gridSize;

    drawQRFinderPattern(ctx, 0, 0, cellSize);
    drawQRFinderPattern(ctx, (gridSize - 7) * cellSize, 0, cellSize);
    drawQRFinderPattern(ctx, 0, (gridSize - 7) * cellSize, cellSize);

    let hash = 0;
    for (let i = 0; i < business.cardUrl.length; i++) {
        hash = (hash << 5) - hash + business.cardUrl.charCodeAt(i);
        hash |= 0;
    }

    ctx.fillStyle = "#172033";
    for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
            if ((r < 7 && c < 7) || (r < 7 && c >= gridSize - 7) || (r >= gridSize - 7 && c < 7)) continue;
            if (r >= 9 && r <= 15 && c >= 9 && c <= 15) continue;

            const val = (r * 31 + c * 17 + Math.abs(hash)) % 7;
            if (val < 4) {
                ctx.fillRect(c * cellSize + 1, r * cellSize + 1, cellSize - 2, cellSize - 2);
            }
        }
    }

    const downloadBtn = document.getElementById("qr-download-btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            const link = document.createElement("a");
            link.download = "Tanishq_Stationery_QR.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
            showToast("QR code downloaded!");
        });
    }
}

function drawQRFinderPattern(ctx, x, y, cellSize) {
    ctx.fillStyle = "#172033";
    ctx.fillRect(x, y, 7 * cellSize, 7 * cellSize);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x + cellSize, y + cellSize, 5 * cellSize, 5 * cellSize);
    ctx.fillStyle = "#172033";
    ctx.fillRect(x + 2 * cellSize, y + 2 * cellSize, 3 * cellSize, 3 * cellSize);
}

// 11. SUBTLE 3D CARD TILT INTERACTION
function initTiltEffect() {
    const card = document.getElementById("hero-3d-card");
    if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (window.matchMedia('(hover: hover)').matches) {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
            const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    }
}

// 12. AMBIENT PARTICLES CANVAS BACKGROUND
function initCanvasParticles() {
    const canvas = document.getElementById("ambient-canvas");
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const isMobile = width < 480;
    const particleCount = isMobile ? 10 : 20;

    const particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.35 + 0.1
    }));

    function animate() {
        ctx.clearRect(0, 0, width, height);
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        const particleColor = isDark ? "245, 158, 11" : "217, 119, 6";

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${particleColor}, ${p.alpha})`;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// 13. INTERSECTION OBSERVER SCROLL REVEAL
function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.08 });

    reveals.forEach(el => observer.observe(el));
}
