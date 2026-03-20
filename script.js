// ==================== CONFIGURACIÓN ====================
const WHATSAPP_NUMBER = "573145476668";

// ==================== DATOS DE PRODUCTOS ====================
const productsData = [
    { id: 1, name: 'Clásica', category: 'hamburguesas', price: 15000, image: 'https://placehold.co/200x200/FFB347/white?text=🍔', ingredients: ['Carne 100% res', 'Queso cheddar', 'Lechuga', 'Tomate', 'Cebolla', 'Salsa especial'], extras: [{ name: 'Queso extra', price: 2000 }, { name: 'Tocineta', price: 3000 }] },
    { id: 2, name: 'Especial', category: 'hamburguesas', price: 18000, image: 'https://placehold.co/200x200/FFB347/white?text=🍔', ingredients: ['Doble carne', 'Queso americano', 'Tocineta', 'Lechuga', 'Tomate', 'Cebolla caramelizada', 'Salsa BBQ'], extras: [{ name: 'Triple carne', price: 5000 }, { name: 'Cebolla crispy', price: 2500 }] },
    { id: 3, name: 'BBQ', category: 'hamburguesas', price: 17000, image: 'https://placehold.co/200x200/FFB347/white?text=🍔', ingredients: ['Carne premium', 'Queso mozzarella', 'Tocineta ahumada', 'Aros de cebolla', 'Salsa BBQ'], extras: [{ name: 'Jalapeños', price: 1500 }, { name: 'Huevo frito', price: 2000 }] },
    { id: 4, name: 'Sencillo', category: 'perros', price: 8000, image: 'https://placehold.co/200x200/FF6B35/white?text=🌭', ingredients: ['Salchicha premium', 'Pan artesanal', 'Salsas', 'Papas chip'], extras: [{ name: 'Queso rallado', price: 1500 }, { name: 'Tocineta', price: 2000 }] },
    { id: 5, name: 'Especial', category: 'perros', price: 12000, image: 'https://placehold.co/200x200/FF6B35/white?text=🌭', ingredients: ['Salchicha jumbo', 'Queso fundido', 'Tocineta', 'Papas chip', 'Maíz tierno'], extras: [{ name: 'Piña', price: 1000 }, { name: 'Salsa de ajo', price: 1000 }] },
    { id: 6, name: 'Ranchero', category: 'perros', price: 13000, image: 'https://placehold.co/200x200/FF6B35/white?text=🌭', ingredients: ['Salchicha ranchera', 'Carne desmechada', 'Queso gratinado', 'Cebolla caramelizada'], extras: [{ name: 'Jalapeños', price: 1500 }, { name: 'Guacamole', price: 2500 }] },
    { id: 7, name: 'Tradicional', category: 'salchipapas', price: 10000, image: 'https://placehold.co/200x200/FFD700/white?text=🍟', ingredients: ['Papas crispy', 'Salchicha en rodajas', 'Salsas'], extras: [{ name: 'Queso fundido', price: 2000 }, { name: 'Huevo frito', price: 2000 }] },
    { id: 8, name: 'Especial', category: 'salchipapas', price: 14000, image: 'https://placehold.co/200x200/FFD700/white?text=🍟', ingredients: ['Papas', 'Salchicha', 'Pollo apanado', 'Queso', 'Tocineta', 'Maíz'], extras: [{ name: 'Carne desmechada', price: 3000 }, { name: 'Piña', price: 1500 }] },
    { id: 9, name: 'Mixta', category: 'salchipapas', price: 16000, image: 'https://placehold.co/200x200/FFD700/white?text=🍟', ingredients: ['Papas', 'Salchicha', 'Carne', 'Pollo', 'Chorizo', 'Queso', 'Huevo'], extras: [{ name: 'Guacamole', price: 3000 }, { name: 'Champiñones', price: 2500 }] },
    { id: 10, name: 'Hawaiana', category: 'pizzas', price: 25000, image: 'https://placehold.co/200x200/FF6B35/white?text=🍕', ingredients: ['Masa artesanal', 'Salsa tomate', 'Queso', 'Jamón', 'Piña'], extras: [{ name: 'Borde de queso', price: 4000 }, { name: 'Tocineta extra', price: 3000 }] },
    { id: 11, name: 'Pepperoni', category: 'pizzas', price: 27000, image: 'https://placehold.co/200x200/FF6B35/white?text=🍕', ingredients: ['Masa', 'Salsa napolitana', 'Doble queso', 'Pepperoni', 'Aceitunas'], extras: [{ name: 'Extra pepperoni', price: 5000 }, { name: 'Jalapeños', price: 2000 }] },
    { id: 12, name: 'Vegetariana', category: 'pizzas', price: 24000, image: 'https://placehold.co/200x200/FF6B35/white?text=🍕', ingredients: ['Masa integral', 'Salsa', 'Queso', 'Champiñones', 'Pimientos', 'Cebolla'], extras: [{ name: 'Espinaca', price: 2000 }, { name: 'Alcachofas', price: 3000 }] },
    { id: 13, name: 'Coca-Cola', category: 'bebidas', price: 3000, image: 'https://placehold.co/200x200/DC143C/white?text=🥤', ingredients: ['Gaseosa 350ml'], extras: [] },
    { id: 14, name: 'Sprite', category: 'bebidas', price: 3000, image: 'https://placehold.co/200x200/00A86B/white?text=🥤', ingredients: ['Gaseosa 350ml'], extras: [] },
    { id: 15, name: 'Jugo Natural', category: 'bebidas', price: 5000, image: 'https://placehold.co/200x200/FFA500/white?text=🧃', ingredients: ['Jugo 400ml', 'Frutas de temporada'], extras: [{ name: 'Lulo', price: 0 }, { name: 'Maracuyá', price: 0 }, { name: 'Mora', price: 0 }, { name: 'Guanábana', price: 0 }, { name: 'Naranja', price: 0 }, { name: 'Piña', price: 0 }, { name: 'Fresa', price: 500 }] },
    { id: 16, name: 'Combo 1', category: 'combos', price: 20000, image: 'https://placehold.co/200x200/FFB347/white?text=🍗', ingredients: ['Hamburguesa clásica', 'Papas medianas', 'Gaseosa'], extras: [{ name: 'Gaseosa grande', price: 2000 }] },
    { id: 17, name: 'Combo 2', category: 'combos', price: 22000, image: 'https://placehold.co/200x200/FFB347/white?text=🍗', ingredients: ['Perro especial', 'Salchipapa pequeña', 'Gaseosa'], extras: [{ name: 'Postre', price: 3000 }] },
    { id: 18, name: 'Combo 3', category: 'combos', price: 35000, image: 'https://placehold.co/200x200/FFB347/white?text=🍗', ingredients: ['Pizza mediana', 'Papas grandes', '2 Gaseosas'], extras: [{ name: 'Pizza grande', price: 8000 }] }
];

// ==================== FUNCIÓN DE TOAST ====================
function showToast(message, type = 'warning') {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    const icons = { error: '❌', success: '✅', warning: '⚠️' };
    toast.innerHTML = `${icons[type] || '⚠️'} ${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== ESTADO GLOBAL ====================
let cart = [];
let selectedPayment = null;
let selectedDelivery = null;
let currentCategory = 'todos';
let searchTerm = '';
let isOpen = true;
let pendingAddProduct = null;

// ==================== FUNCIONES AUXILIARES ====================
function checkBusinessStatus() {
    const now = new Date();
    const hour = now.getHours();
    isOpen = (hour >= 17 || hour < 1);
    const banner = document.getElementById('statusBanner');
    if (isOpen) {
        banner.className = 'bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-2xl text-center font-semibold shadow-lg';
        banner.innerHTML = '🟢 Abierto, ¡te esperamos!';
    } else {
        banner.className = 'bg-gray-200 text-gray-600 p-3 rounded-2xl text-center font-semibold';
        banner.innerHTML = '🔴 Cerrado. Abrimos a las 5:00 PM';
    }
}

function showClosedModal(callback) {
    const modal = document.getElementById('closedModal');
    modal.classList.remove('hidden');
    pendingAddProduct = callback;
}

function renderProducts() {
    let filtered = productsData.filter(p => currentCategory === 'todos' || p.category === currentCategory);
    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    
    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    const categoryMap = {
        hamburguesas: '🍔 Hamburguesa',
        perros: '🌭 Perro',
        salchipapas: '🍟 Salchipapa',
        pizzas: '🍕 Pizza',
        bebidas: '🥤 Bebida',
        combos: '🍗 Combo'
    };
    
    grid.innerHTML = filtered.map(product => {
        let displayName = product.name;
        if (searchTerm || currentCategory === 'todos') {
            const prefix = categoryMap[product.category] || '';
            displayName = `${prefix} ${product.name}`.trim();
        }
        return `
            <div class="card-flip relative h-72" data-id="${product.id}">
                <div class="card-flip-inner">
                    <div class="card-front glass-card p-3 flex flex-col shadow-xl">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover rounded-2xl mb-2">
                        <h3 class="font-bold text-gray-800 text-sm">${displayName}</h3>
                        <div class="flex justify-between items-center mt-2">
                            <span class="text-[#FF6B35] font-bold text-lg">$${product.price.toLocaleString()}</span>
                            <div class="flex gap-1">
                                <button class="info-flip-btn w-8 h-8 rounded-full bg-gray-100 text-[#FF6B35] flex items-center justify-center" data-id="${product.id}" title="Ver ingredientes y adicionales">
                                    <i class="fas fa-eye text-sm"></i>
                                </button>
                                <button class="add-to-cart-btn w-8 h-8 rounded-full bg-[#FF6B35] text-white flex items-center justify-center" data-id="${product.id}">
                                    <i class="fas fa-plus text-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-back glass-card p-3 flex flex-col">
                        <div class="flex justify-between items-center mb-2">
                            <h4 class="font-bold text-[#FF6B35]">Ingredientes</h4>
                            <button class="close-flip-btn w-6 h-6 rounded-full bg-gray-200 text-gray-600" data-id="${product.id}">
                                <i class="fas fa-times text-xs"></i>
                            </button>
                        </div>
                        <ul class="text-xs space-y-1 mb-3">
                            ${product.ingredients.map(ing => `<li class="flex items-start gap-1"><span class="text-[#FF6B35]">•</span> ${ing}</li>`).join('')}
                        </ul>
                        ${product.extras.length > 0 ? `
                            <div class="mt-2">
                                <h4 class="font-semibold text-sm mb-2">Adiciones</h4>
                                <div class="space-y-2">
                                    ${product.extras.map(extra => `
                                        <div class="flex justify-between items-center text-xs">
                                            <span>${extra.name}</span>
                                            <div class="flex items-center gap-2">
                                                <span class="text-[#FF6B35] font-medium">+$${extra.price.toLocaleString()}</span>
                                                <button class="add-extra-btn bg-[#FF6B35] text-white w-6 h-6 rounded-full text-xs" data-id="${product.id}" data-extra='${JSON.stringify(extra)}'>
                                                    <i class="fas fa-plus text-xs"></i>
                                                </button>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : '<p class="text-xs text-gray-400 mt-2">Sin adiciones disponibles</p>'}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Event listeners
    document.querySelectorAll('.info-flip-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.closest('.card-flip').classList.add('flipped');
        });
    });
    document.querySelectorAll('.close-flip-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.closest('.card-flip').classList.remove('flipped');
        });
    });
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            if (!isOpen) {
                showClosedModal(() => addToCart(id));
            } else {
                addToCart(id);
            }
        });
    });
    document.querySelectorAll('.add-extra-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const extra = JSON.parse(btn.dataset.extra);
            addExtraToCart(id, extra);
        });
    });
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId && (!item.extrasApplied || item.extrasApplied.length === 0));
    
    const categoryMap = {
        hamburguesas: '🍔 Hamburguesa',
        perros: '🌭 Perro',
        salchipapas: '🍟 Salchipapa',
        pizzas: '🍕 Pizza',
        bebidas: '🥤 Bebida',
        combos: '🍗 Combo'
    };
    
    const fullName = `${categoryMap[product.category] || ''} ${product.name}`.trim();
    
    if (existingItem) {
        existingItem.quantity++;
        // 🔥 RECALCULAR subtotal
        const extrasTotal = existingItem.extrasApplied?.reduce((sum, e) => sum + (e.price * (e.quantity || 1)), 0) || 0;
        existingItem.subtotal = (existingItem.price * existingItem.quantity) + extrasTotal;
    } else {
        cart.push({ 
            ...product, 
            quantity: 1, 
            extrasApplied: [], 
            subtotal: product.price,
            fullName: fullName
        });
    }
    
    updateCartUI();
    animateCart();
    showToast(`✓ ${fullName} agregado al carrito`, 'success');
}

function addExtraToCart(productId, extra) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        const existingExtra = item.extrasApplied.find(e => e.name === extra.name);
        if (existingExtra) {
            existingExtra.quantity = (existingExtra.quantity || 1) + 1;
        } else {
            item.extrasApplied.push({ ...extra, quantity: 1 });
        }
        // 🔥 RECALCULAR SUBTOTAL con extras
        const extrasTotal = item.extrasApplied.reduce((sum, e) => sum + (e.price * (e.quantity || 1)), 0);
        item.subtotal = (item.price * item.quantity) + extrasTotal;
        updateCartUI();
        animateCart();
        showToast(`✓ ${extra.name} agregado a ${item.name}`, 'success');
    } else {
        const product = productsData.find(p => p.id === productId);
        showToast(`Primero agrega ${product.name} al carrito`, 'warning');
    }
}

function animateCart() {
    const badge = document.getElementById('cartCountBadge');
    badge.classList.add('cart-beat');
    setTimeout(() => badge.classList.remove('cart-beat'), 500);
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCountBadge').textContent = count;
    renderCartContent();
}

function renderCartContent() {
    const container = document.getElementById('cartContent');
    const footer = document.getElementById('cartFooter');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <div class="text-7xl mb-4 opacity-50">🛒</div>
                <h3 class="text-xl font-bold text-gray-700 mb-2">¡Hora de pedir!</h3>
                <p class="text-gray-500 text-sm mb-6">Tu carrito está esperando tus antojos. <br>¿Qué vas a comer hoy?</p>
                <button id="emptyCartCloseBtn" class="bg-[#FF6B35] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95">
                    🍔 Ver el menú
                </button>
            </div>
        `;
        footer.innerHTML = '';
        
        const emptyCartBtn = document.getElementById('emptyCartCloseBtn');
        if (emptyCartBtn) {
            emptyCartBtn.addEventListener('click', () => {
                closeCartPanel();
                document.querySelector('.products-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
        return;
    }
    
    let subtotal = 0;
    container.innerHTML = cart.map(item => {
        const itemTotal = item.subtotal || (item.price * item.quantity);
        subtotal += itemTotal;
        return `
            <div class="glass-card p-3 rounded-xl">
                <div class="flex justify-between items-start">
                    <div>
                        <h4 class="font-semibold">${item.fullName || item.name}</h4>
                        ${item.extrasApplied?.map(e => `<div class="text-xs text-gray-500 ml-2">+ ${e.name} x${e.quantity || 1}</div>`).join('') || ''}
                    </div>
                    <div class="text-right">
                        <div class="font-bold text-[#FF6B35]">$${itemTotal.toLocaleString()}</div>
                        <div class="flex items-center gap-2 mt-1">
                            <button class="qty-dec w-6 h-6 rounded-full bg-gray-200" data-id="${item.id}">-</button>
                            <span class="text-sm font-medium w-6 text-center">${item.quantity}</span>
                            <button class="qty-inc w-6 h-6 rounded-full bg-gray-200" data-id="${item.id}">+</button>
                            <button class="remove-item w-6 h-6 rounded-full bg-red-100 text-red-500" data-id="${item.id}">
                                <i class="fas fa-trash-alt text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    const total = subtotal;
    footer.innerHTML = `
        <div class="space-y-4">
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <i class="fas fa-truck text-[#FF6B35] text-sm"></i>
                    <h4 class="font-semibold text-gray-700 text-sm">¿Cómo quieres recibir tu pedido?</h4>
                </div>
                <div class="flex gap-2">
                    <button id="deliveryDomicilio" class="flex-1 py-2 rounded-xl border-2 ${selectedDelivery === 'domicilio' ? 'border-[#FF6B35] bg-[#FF6B35]/10 text-[#FF6B35]' : 'border-gray-200'} font-medium transition-all">
                        🏠 Domicilio
                    </button>
                    <button id="deliveryRecoger" class="flex-1 py-2 rounded-xl border-2 ${selectedDelivery === 'recoger' ? 'border-[#FF6B35] bg-[#FF6B35]/10 text-[#FF6B35]' : 'border-gray-200'} font-medium transition-all">
                        🏪 Paso y recojo
                    </button>
                </div>
            </div>
            
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <i class="fas fa-credit-card text-[#FF6B35] text-sm"></i>
                    <h4 class="font-semibold text-gray-700 text-sm">¿Con qué vas a pagar?</h4>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <button data-payment="efectivo" class="payment-opt py-2 rounded-xl border ${selectedPayment === 'efectivo' ? 'border-[#FF6B35] bg-[#FF6B35]/10 text-[#FF6B35]' : 'border-gray-200'} transition-all">💵 Efectivo</button>
                    <button data-payment="nequi" class="payment-opt py-2 rounded-xl border ${selectedPayment === 'nequi' ? 'border-[#FF6B35] bg-[#FF6B35]/10 text-[#FF6B35]' : 'border-gray-200'} transition-all">📱 Nequi</button>
                    <button data-payment="daviplata" class="payment-opt py-2 rounded-xl border ${selectedPayment === 'daviplata' ? 'border-[#FF6B35] bg-[#FF6B35]/10 text-[#FF6B35]' : 'border-gray-200'} transition-all">💳 Daviplata</button>
                    <button data-payment="otro" class="payment-opt py-2 rounded-xl border ${selectedPayment === 'otro' ? 'border-[#FF6B35] bg-[#FF6B35]/10 text-[#FF6B35]' : 'border-gray-200'} transition-all">🏦 Otro</button>
                </div>
            </div>
            
            ${selectedDelivery === 'domicilio' ? `
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-xl text-xs text-yellow-700 flex gap-2 items-start">
                    <i class="fas fa-info-circle mt-0.5"></i>
                    <span>📦 El costo del domicilio se paga aparte al momento de la entrega y no está incluido en este total</span>
                </div>
            ` : ''}
            
            <div class="flex justify-between font-bold text-lg pt-2 border-t border-gray-100">
                <span>Total a pagar ${selectedDelivery === 'domicilio' ? '<span class="text-xs font-normal text-gray-500">(Sin domicilio)</span>' : ''}</span>
                <span class="text-[#FF6B35]">$${total.toLocaleString()}</span>
            </div>
            
            <button id="proceedCheckout" class="w-full bg-[#FF6B35] text-white py-3 rounded-xl font-bold transition-all active:scale-95 ${!selectedPayment ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#E85A2A]'}" ${!selectedPayment ? 'disabled' : ''}>
                Continuar <i class="fas fa-arrow-right ml-2"></i>
            </button>
        </div>
    `;
    
    // Event listeners
    document.querySelectorAll('.qty-inc').forEach(btn => {
        btn.onclick = () => changeQty(parseInt(btn.dataset.id), 1);
    });
    document.querySelectorAll('.qty-dec').forEach(btn => {
        btn.onclick = () => changeQty(parseInt(btn.dataset.id), -1);
    });
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.onclick = () => removeItem(parseInt(btn.dataset.id));
    });
    
    const deliveryDomicilio = document.getElementById('deliveryDomicilio');
    const deliveryRecoger = document.getElementById('deliveryRecoger');
    if (deliveryDomicilio) deliveryDomicilio.onclick = () => { selectedDelivery = 'domicilio'; updateCartUI(); };
    if (deliveryRecoger) deliveryRecoger.onclick = () => { selectedDelivery = 'recoger'; updateCartUI(); };
    
    document.querySelectorAll('.payment-opt').forEach(opt => {
        opt.onclick = () => {
            selectedPayment = opt.dataset.payment;
            updateCartUI();
        };
    });
    
    const proceedBtn = document.getElementById('proceedCheckout');
    if (proceedBtn) {
        proceedBtn.onclick = () => {
            if (selectedPayment && selectedDelivery) {
                openCheckout();
            } else {
                showToast('Selecciona método de pago y opción de entrega', 'warning');
            }
        };
    }
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        const newQty = item.quantity + delta;
        if (newQty <= 0) {
            removeItem(id);
        } else {
            item.quantity = newQty;
            // 🔥 RECALCULAR SUBTOTAL con la nueva cantidad y los extras
            const basePrice = item.price;
            const extrasTotal = item.extrasApplied?.reduce((sum, e) => sum + (e.price * (e.quantity || 1)), 0) || 0;
            item.subtotal = (basePrice * item.quantity) + extrasTotal;
            updateCartUI();
        }
    }
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function openCheckout() {
    closeCartPanel();
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm';
    modal.innerHTML = `
        <div class="glass-card rounded-2xl p-6 max-w-md w-full modal-enter relative">
            <button id="closeCheckoutModal" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center transition-all">
                <i class="fas fa-times text-sm"></i>
            </button>
            <h3 class="text-xl font-bold mb-4 pr-6">Completa tu pedido</h3>
            <div class="space-y-3">
                <input type="text" id="checkoutName" placeholder="Nombre completo *" class="w-full p-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:outline-none" maxlength="50">
                <input type="tel" id="checkoutPhone" placeholder="Celular (10 dígitos) *" class="w-full p-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:outline-none" maxlength="10" inputmode="numeric">
                ${selectedDelivery === 'domicilio' ? `
                    <input type="text" id="checkoutBarrio" placeholder="Barrio *" class="w-full p-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:outline-none" maxlength="50">
                    <input type="text" id="checkoutAddress" placeholder="Dirección *" class="w-full p-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:outline-none" maxlength="50">
                    <textarea id="checkoutAddressNote" rows="2" placeholder="Indicación especial de dirección (opcional) - Ej: Casa de portón verde, callejón principal" class="w-full p-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:outline-none resize-none"></textarea>
                ` : `
                    <!-- Recoger en punto: solo necesita nombre y teléfono, sin campos adicionales -->
                    <div class="bg-[#FF6B35]/10 rounded-xl p-4 text-center">
                        <i class="fas fa-store text-[#FF6B35] text-2xl mb-2 block"></i>
                        <p class="text-sm text-gray-700">📍 <strong>Paso y recojo</strong> - Nos vemos en nuestro local</p>
                        <p class="text-xs text-gray-500 mt-1">Calle 5 #10-20, Popayán</p>
                    </div>
                `}
                <textarea id="checkoutSpecialRequest" rows="2" placeholder="Solicitud especial del pedido (opcional) - Ej: Sin salsa de ajo, con todas las salsas aparte" class="w-full p-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:outline-none resize-none"></textarea>
                <button id="submitCheckout" class="w-full bg-[#FF6B35] text-white py-3 rounded-xl font-bold transition-all active:scale-95 hover:bg-[#E85A2A]">
                    Realizar Pedido <i class="fas fa-whatsapp ml-2"></i>
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const phoneInput = document.getElementById('checkoutPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').slice(0, 10);
        });
    }
    
    document.getElementById('closeCheckoutModal').addEventListener('click', () => {
        modal.remove();
        openCartPanel();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            openCartPanel();
        }
    });
    
    document.getElementById('submitCheckout').addEventListener('click', () => {
        const name = document.getElementById('checkoutName')?.value.trim();
        const phone = document.getElementById('checkoutPhone')?.value.trim();
        
        if (!name) {
            showToast('Por favor ingresa tu nombre', 'error');
            return;
        }
        if (!phone || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
            showToast('El celular debe tener 10 dígitos', 'error');
            return;
        }
        
        let formData = { name, phone };
        
        if (selectedDelivery === 'domicilio') {
            const barrio = document.getElementById('checkoutBarrio')?.value.trim();
            const address = document.getElementById('checkoutAddress')?.value.trim();
            const addressNote = document.getElementById('checkoutAddressNote')?.value.trim();
            
            if (!barrio) {
                showToast('Por favor ingresa tu barrio', 'error');
                return;
            }
            if (!address) {
                showToast('Por favor ingresa tu dirección', 'error');
                return;
            }
            
            formData.barrio = barrio;
            formData.address = address;
            formData.addressNote = addressNote || '';
        } else {
            // Recoger en punto: no necesita campos adicionales
            formData.pickupNote = 'Paso y recojo en local';
        }
        
        const specialRequest = document.getElementById('checkoutSpecialRequest')?.value.trim();
        formData.specialRequest = specialRequest || 'Ninguna';
        
        window.pendingOrderData = formData;
        modal.remove();
        document.getElementById('turnosModal').classList.remove('hidden');
    });
}

function closeCartPanel() {
    document.getElementById('cartPanel').classList.add('translate-y-full');
    document.getElementById('cartOverlay').classList.remove('opacity-100');
    document.getElementById('cartOverlay').classList.add('opacity-0');
}

function openCartPanel() {
    document.getElementById('cartPanel').classList.remove('translate-y-full');
    document.getElementById('cartOverlay').classList.add('opacity-100');
    document.getElementById('cartOverlay').classList.remove('opacity-0');
}

function sendToWhatsApp() {
    const data = window.pendingOrderData || { name: 'Cliente', phone: '', barrio: '', address: '', addressNote: '', pickupNote: '', specialRequest: 'Ninguna' };
    const { name, phone, barrio, address, addressNote, pickupNote, specialRequest } = data;
    
    let productList = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemPrice = item.subtotal || (item.price * item.quantity);
        subtotal += itemPrice;
        let productLine = `- ${item.quantity}x ${item.fullName || item.name}`;
        if (item.extrasApplied && item.extrasApplied.length > 0) {
            const extrasText = item.extrasApplied.map(e => `${e.name} x${e.quantity || 1}`).join(', ');
            productLine += ` (${extrasText})`;
        }
        productLine += ` : $${itemPrice.toLocaleString()}`;
        productList += productLine + '\n';
    });
    
    const paymentMap = { efectivo: '💵 En Efectivo', nequi: '📱 Por Nequi', daviplata: '💳 Por Daviplata', otro: '🏦 Otro' };
    const paymentMethod = paymentMap[selectedPayment] || selectedPayment || 'No especificado';
    
    let message = `*🍔 NUEVO PEDIDO - EATAI* 🍔
------------------------------
*Cliente:* ${name}
*Teléfono:* ${phone}`;
    
    if (selectedDelivery === 'domicilio') {
        message += `
*Barrio:* ${barrio || 'No especificado'}
*Dirección:* ${address || 'No especificado'}`;
        if (addressNote) message += `
*Indicación de dirección:* ${addressNote}`;
        message += `
*Entrega:* 🏠 Domicilio`;
    } else {
        message += `
*Entrega:* 🏪 Recoger en punto`;
        if (pickupNote) message += `
*Indicaciones:* ${pickupNote}`;
    }
    
    message += `
*Solicitud especial:* ${specialRequest}
*Pago:* ${paymentMethod}
------------------------------
*Productos a preparar:*
${productList}
------------------------------
*TOTAL:* $${subtotal.toLocaleString()}${selectedDelivery === 'domicilio' ? ' (Sin domicilio)' : ''}
------------------------------
*⏱️ Turnos por orden de llegada - Gracias por tu paciencia 🫶*`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
    checkBusinessStatus();
    renderProducts();
    setInterval(checkBusinessStatus, 60000);
    
    document.getElementById('cartFloating').addEventListener('click', openCartPanel);
    document.getElementById('closeCartBtn').addEventListener('click', closeCartPanel);
    document.getElementById('cartOverlay').addEventListener('click', closeCartPanel);
    document.getElementById('continueShoppingBtn').addEventListener('click', () => {
        document.getElementById('closedModal').classList.add('hidden');
        if (pendingAddProduct) pendingAddProduct();
        pendingAddProduct = null;
    });
    document.getElementById('closeModalBtn').addEventListener('click', () => {
        document.getElementById('closedModal').classList.add('hidden');
        pendingAddProduct = null;
    });
    document.getElementById('confirmTurnosBtn').addEventListener('click', () => {
        document.getElementById('turnosModal').classList.add('hidden');
        sendToWhatsApp();
        setTimeout(() => {
            cart = [];
            selectedPayment = null;
            selectedDelivery = null;
            document.querySelectorAll('.payment-opt').forEach(opt => opt.classList.remove('selected'));
            updateCartUI();
            showToast('✅ Pedido enviado con éxito', 'success');
        }, 500);
    });
    document.getElementById('cancelTurnosBtn').addEventListener('click', () => {
        document.getElementById('turnosModal').classList.add('hidden');
        openCartPanel();
        showToast('Pedido cancelado. Puedes seguir agregando productos', 'warning');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('bg-[#FF6B35]/10', 'text-[#FF6B35]'));
            btn.classList.add('bg-[#FF6B35]/10', 'text-[#FF6B35]');
            currentCategory = btn.dataset.category;
            renderProducts();
        });
    });
    document.querySelector('.tab-btn').classList.add('bg-[#FF6B35]/10', 'text-[#FF6B35]');
    
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderProducts();
    });
    
    // 🔥 NUEVO: Forzar render del carrito vacío al cargar la página
    setTimeout(() => {
        if (cart.length === 0) {
            console.log('Forzando render del carrito vacío');
            renderCartContent();
        }
    }, 100);
});
