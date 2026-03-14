// EMR Dashboard JavaScript

// Mock Database of Patients, Records, and Facilities
const mockData = {
    patients: [
        {
            id: 'P001',
            name: 'John Doe',
            email: 'john.doe@email.com',
            dob: '1985-05-15',
            age: 38,
            bloodType: 'O+',
            gender: 'Male',
            phone: '555-0101',
            allergies: ['Penicillin', 'Peanuts'],
            chronicDiseases: ['Hypertension', 'Type 2 Diabetes']
        },
        {
            id: 'P002',
            name: 'Jane Smith',
            email: 'jane.smith@email.com',
            dob: '1990-08-22',
            age: 33,
            bloodType: 'A-',
            gender: 'Female',
            phone: '555-0102',
            allergies: ['Shellfish'],
            chronicDiseases: ['Asthma']
        },
        {
            id: 'P003',
            name: 'Robert Johnson',
            email: 'robert.j@email.com',
            dob: '1975-03-10',
            age: 48,
            bloodType: 'B+',
            gender: 'Male',
            phone: '555-0103',
            allergies: [],
            chronicDiseases: ['Heart Disease']
        }
    ],
    facilities: [
        {
            id: 'F001',
            name: 'Central Hospital',
            type: 'Hospital',
            address: '123 Main St, City Center',
            phone: '555-1001',
            services: ['Emergency', 'Surgery', 'Cardiology', 'Orthopedics'],
            status: 'Connected'
        },
        {
            id: 'F002',
            name: 'Westside Clinic',
            type: 'Clinic',
            address: '456 Oak Ave, Westside',
            phone: '555-1002',
            services: ['General Practice', 'Pediatrics', 'Dermatology'],
            status: 'Connected'
        },
        {
            id: 'F003',
            name: 'Lab Services Inc',
            type: 'Laboratory',
            address: '789 Tech Blvd, Lab District',
            phone: '555-1003',
            services: ['Blood Tests', 'Drug Screening', 'DNA Analysis'],
            status: 'Connected'
        },
        {
            id: 'F004',
            name: 'Metro Imaging Center',
            type: 'Imaging Center',
            address: '321 Imaging Way, Downtown',
            phone: '555-1004',
            services: ['X-Ray', 'CT Scan', 'MRI', 'Ultrasound'],
            status: 'Connected'
        }
    ],
    records: [
        {
            id: 'R001',
            patientId: 'P001',
            type: 'lab',
            facilityId: 'F003',
            facilityName: 'Lab Services Inc',
            date: '2026-03-02',
            time: '14:30',
            title: 'Blood Work Panel',
            result: 'Complete',
            status: 'Normal',
            details: {
                test: 'Complete Blood Count (CBC)',
                hemoglobin: '14.5 g/dL (Normal)',
                whiteBloodCells: '7.2 K/uL (Normal)',
                platelets: '250 K/uL (Normal)'
            }
        },
        {
            id: 'R002',
            patientId: 'P001',
            type: 'imaging',
            facilityId: 'F004',
            facilityName: 'Metro Imaging Center',
            date: '2026-02-28',
            time: '10:15',
            title: 'Chest CT Scan',
            result: 'Complete',
            status: 'Normal',
            details: {
                scan: 'CT Chest with contrast',
                findings: 'No abnormalities detected',
                impression: 'Healthy lungs and heart'
            }
        },
        {
            id: 'R003',
            patientId: 'P001',
            type: 'medical',
            facilityId: 'F001',
            facilityName: 'Central Hospital',
            date: '2026-02-25',
            time: '09:00',
            title: 'Cardiology Consultation',
            provider: 'Dr. Sarah Mitchell',
            notes: 'Patient presents with regular checkup. BP well controlled on current medication. Continue current regimen.',
            diagnosis: 'Hypertension (Controlled)',
            recommendations: 'Continue medication, increase exercise, reduce sodium intake'
        },
        {
            id: 'R004',
            patientId: 'P001',
            type: 'prescriptions',
            facilityId: 'F001',
            facilityName: 'Central Hospital',
            date: '2026-02-25',
            status: 'Active',
            medication: 'Lisinopril',
            dosage: '20mg',
            frequency: 'Once daily',
            duration: '6 months',
            prescribedBy: 'Dr. Sarah Mitchell'
        },
        {
            id: 'R005',
            patientId: 'P001',
            type: 'appointments',
            facilityId: 'F002',
            facilityName: 'Westside Clinic',
            date: '2026-03-15',
            time: '14:00',
            title: 'General Checkup',
            provider: 'Dr. James Wilson',
            status: 'Scheduled'
        },
        {
            id: 'R006',
            patientId: 'P002',
            type: 'lab',
            facilityId: 'F003',
            facilityName: 'Lab Services Inc',
            date: '2026-03-01',
            time: '11:00',
            title: 'Pulmonary Function Test',
            result: 'Complete',
            status: 'Abnormal',
            details: {
                test: 'Spirometry',
                fev1: '72% (Below Normal)',
                fvc: '85% (Normal)',
                ratio: '85% (Normal)',
                notes: 'Slight airway obstruction detected'
            }
        },
        {
            id: 'R007',
            patientId: 'P002',
            type: 'prescriptions',
            facilityId: 'F002',
            facilityName: 'Westside Clinic',
            date: '2026-02-20',
            status: 'Active',
            medication: 'Albuterol Inhaler',
            dosage: '90mcg',
            frequency: 'As needed',
            duration: 'Ongoing',
            prescribedBy: 'Dr. Emily Rodriguez'
        }
    ],
    activities: [
        {
            facilityId: 'F003',
            facilityName: 'Lab Services Inc',
            activity: 'Blood test completed',
            timestamp: '2 hours ago',
            type: 'lab'
        },
        {
            facilityId: 'F001',
            facilityName: 'Central Hospital',
            activity: 'Doctor consultation notes recorded',
            timestamp: '4 days ago',
            type: 'medical'
        },
        {
            facilityId: 'F004',
            facilityName: 'Metro Imaging Center',
            activity: 'CT scan results available',
            timestamp: '5 days ago',
            type: 'imaging'
        },
        {
            facilityId: 'F002',
            facilityName: 'Westside Clinic',
            activity: 'Prescription refill authorized',
            timestamp: '1 week ago',
            type: 'prescription'
        }
    ],
    alerts: [
        {
            id: 'A001',
            type: 'warning',
            title: 'Medication Refill Due',
            message: 'Your Lisinopril prescription will expire in 7 days. Contact your doctor for refill.',
            facilityName: 'Central Hospital',
            timestamp: '2 hours ago'
        },
        {
            id: 'A002',
            type: 'info',
            title: 'Appointment Reminder',
            message: 'You have an appointment scheduled at Westside Clinic on March 15, 2026 at 2:00 PM',
            facilityName: 'Westside Clinic',
            timestamp: '1 day ago'
        },
        {
            id: 'A003',
            type: 'critical',
            title: 'Abnormal Lab Results',
            message: 'Your recent pulmonary function test shows slight abnormality. Please contact your physician.',
            facilityName: 'Lab Services Inc',
            timestamp: '2 days ago'
        }
    ]
};

let currentUser = null;
let currentRole = null;
let currentTab = 'dashboard';
let currentRecordType = 'medical';
let currentAdminTab = 'patients';

// Initialize on page load
window.addEventListener('load', function() {
    initializeDashboard();
});

function initializeDashboard() {
    // Get user from sessionStorage or redirect to login
    const userInfo = sessionStorage.getItem('userInfo');
    
    if (!userInfo) {
        window.location.href = 'html.html';
        return;
    }

    const user = JSON.parse(userInfo);
    currentUser = user;
    currentRole = user.role;

    // Load registered users from localStorage and add to mockData
    loadRegisteredUsers();

    // Update user info display
    const userInfoElement = document.getElementById('userInfo');
    const roleIcon = currentRole === 'admin' ? '🔐' : '👤';
    userInfoElement.textContent = `${roleIcon} ${user.name}`;

    // Show/hide admin features
    if (currentRole === 'admin') {
        document.getElementById('adminBtn').style.display = 'block';
        document.getElementById('facilitiesBtn').style.display = 'block';
        document.getElementById('recordsBtn').textContent = '📊 All Records';
    } else {
        document.getElementById('adminBtn').style.display = 'none';
        document.getElementById('facilitiesBtn').style.display = 'none';
        document.getElementById('recordsBtn').textContent = '📋 My Health Records';
    }

    // Load dashboard data
    loadDashboard();
    populateFacilityFilter();
    loadFacilities();
}

function loadRegisteredUsers() {
    // Get registered users from localStorage
    let registeredUsers = JSON.parse(localStorage.getItem('healthcareUsers')) || [];
    
    // Add them to mockData patients if not already present
    registeredUsers.forEach(regUser => {
        if (!mockData.patients.find(p => p.email === regUser.email)) {
            const age = new Date().getFullYear() - new Date(regUser.dob).getFullYear();
            mockData.patients.push({
                id: regUser.id,
                name: regUser.name,
                email: regUser.email,
                dob: regUser.dob,
                age: age,
                bloodType: 'Not Specified',
                gender: 'Not Specified',
                phone: regUser.phone,
                allergies: [],
                chronicDiseases: [],
                status: 'active',
                registeredDate: regUser.createdDate
            });
        }
    });
}

function loadDashboard() {
    if (currentRole === 'admin') {
        loadAdminDashboard();
    } else {
        loadPatientDashboard();
    }
}

function loadPatientDashboard() {
    // Use current user's ID if available, otherwise use mock patient
    const patientId = currentUser.id || 'P001';
    const patientRecords = mockData.records.filter(r => r.patientId === patientId);
    const uniqueFacilities = new Set(patientRecords.map(r => r.facilityId));

    // Update stats
    document.getElementById('totalRecords').textContent = patientRecords.length;
    document.getElementById('facilitiesCount').textContent = uniqueFacilities.size;
    document.getElementById('recentTests').textContent = patientRecords.filter(r => r.type === 'lab').length;
    document.getElementById('activePrescriptions').textContent = patientRecords.filter(r => r.type === 'prescriptions' && r.status === 'Active').length;

    // Update activity list
    loadActivityList();
    loadPatientRecords(patientId);
    
    // Load appointment facilities
    loadAppointmentFacilities();
}

function loadAdminDashboard() {
    document.getElementById('dashboardTitle').textContent = 'Admin Dashboard';
    document.getElementById('dashboardSubtitle').textContent = 'Welcome to Admin Control Panel';

    // Update stats
    const totalRecords = mockData.records.length;
    const uniqueFacilities = new Set(mockData.records.map(r => r.facilityId));
    
    document.getElementById('totalRecords').textContent = totalRecords;
    document.getElementById('facilitiesCount').textContent = mockData.facilities.length;
    document.getElementById('recentTests').textContent = mockData.records.filter(r => r.type === 'lab').length;
    document.getElementById('activePrescriptions').textContent = mockData.records.filter(r => r.type === 'prescriptions' && r.status === 'Active').length;

    // Update activity list with new user registrations
    loadAdminActivityList();
    
    // Load admin data
    loadPatients();
    loadAllRecords();
    loadAnalytics();
}

function loadAdminActivityList() {
    let adminNotifications = JSON.parse(localStorage.getItem('adminNotifications')) || [];
    
    // Combine mock activities with new user and appointment notifications
    let allActivities = [];
    
    // Add recent notifications first
    adminNotifications.forEach(notif => {
        const icon = notif.type === 'new_user' ? '🆕' : notif.type === 'new_appointment' ? '📅' : '🔔';
        const typeLabel = notif.type === 'new_user' ? 'New Patient Registration' : notif.type === 'new_appointment' ? 'New Appointment Request' : 'System';
        
        allActivities.push({
            facilityId: 'System',
            facilityName: icon + ' ' + typeLabel,
            activity: notif.message,
            timestamp: formatTimeAgo(new Date(notif.timestamp)),
            type: notif.type
        });
    });
    
    // Then add regular activities
    allActivities = allActivities.concat(mockData.activities);

    const html = allActivities.slice(0, 5).map(activity => `
        <div class="activity-item">
            <div class="activity-icon">${getActivityIcon(activity.type)}</div>
            <div class="activity-details">
                <div class="activity-title">${activity.facilityName}</div>
                <div class="activity-description">${activity.activity}</div>
                <div class="activity-time">${activity.timestamp}</div>
            </div>
        </div>
    `).join('');

    document.getElementById('activityList').innerHTML = html || '<p>No recent activity</p>';
}

function formatTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) return Math.floor(interval) + ' years ago';
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' months ago';
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' days ago';
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' hours ago';
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minutes ago';
    return Math.floor(seconds) + ' seconds ago';
}

function loadActivityList() {
    const html = mockData.activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">${getActivityIcon(activity.type)}</div>
            <div class="activity-details">
                <div class="activity-title">${activity.facilityName}</div>
                <div class="activity-description">${activity.activity}</div>
                <div class="activity-time">${activity.timestamp}</div>
            </div>
        </div>
    `).join('');

    document.getElementById('activityList').innerHTML = html || '<p>No recent activity</p>';
}

function loadPatientRecords(patientId) {
    const patientRecords = mockData.records.filter(r => r.patientId === patientId);
    displayRecordsByType(patientRecords, currentRecordType);
}

function displayRecordsByType(records, type) {
    let filtered = records;
    if (type !== 'all') {
        filtered = records.filter(r => r.type === type);
    }

    let html = '';
    if (filtered.length === 0) {
        html = '<p class="no-data">No records found</p>';
    } else {
        html = filtered.map(record => createRecordCard(record)).join('');
    }

    document.getElementById('recordsContent').innerHTML = html;
}

function createRecordCard(record) {
    const icon = getRecordIcon(record.type);
    const statusColor = record.status === 'Normal' ? 'success' : record.status === 'Abnormal' ? 'warning' : 'info';
    
    return `
        <div class="record-card ${statusColor}">
            <div class="record-header">
                <div class="record-title-section">
                    <span class="record-icon">${icon}</span>
                    <div>
                        <h3>${record.title}</h3>
                        <p class="record-facility">${record.facilityName}</p>
                    </div>
                </div>
                <div class="record-status">${record.status || 'Pending'}</div>
            </div>
            <div class="record-meta">
                <span class="record-date">📅 ${formatDate(record.date)} ${record.time ? 'at ' + record.time : ''}</span>
                ${record.provider ? `<span class="record-provider">👨‍⚕️ ${record.provider}</span>` : ''}
            </div>
            <div class="record-details">
                ${createRecordDetails(record)}
            </div>
        </div>
    `;
}

function createRecordDetails(record) {
    switch(record.type) {
        case 'lab':
            return `
                <div class="detail-item">
                    <strong>Test:</strong> ${record.details.test}
                </div>
                ${Object.entries(record.details).map(([key, value]) => {
                    if (key !== 'test') return `<div class="detail-item"><strong>${key}:</strong> ${value}</div>`;
                }).join('')}
            `;
        case 'imaging':
            return `
                <div class="detail-item"><strong>Scan:</strong> ${record.details.scan}</div>
                <div class="detail-item"><strong>Findings:</strong> ${record.details.findings}</div>
                <div class="detail-item"><strong>Impression:</strong> ${record.details.impression}</div>
            `;
        case 'medical':
            return `
                <div class="detail-item"><strong>Diagnosis:</strong> ${record.diagnosis}</div>
                <div class="detail-item"><strong>Notes:</strong> ${record.notes}</div>
                <div class="detail-item"><strong>Recommendations:</strong> ${record.recommendations}</div>
            `;
        case 'prescriptions':
            return `
                <div class="detail-item"><strong>Medication:</strong> ${record.medication}</div>
                <div class="detail-item"><strong>Dosage:</strong> ${record.dosage}</div>
                <div class="detail-item"><strong>Frequency:</strong> ${record.frequency}</div>
                <div class="detail-item"><strong>Duration:</strong> ${record.duration}</div>
            `;
        case 'appointments':
            return `
                <div class="detail-item"><strong>Provider:</strong> ${record.provider}</div>
                <div class="detail-item"><strong>Status:</strong> ${record.status}</div>
            `;
        default:
            return '';
    }
}

function loadPatients() {
    const html = mockData.patients.map(patient => {
        // Check if patient is newly registered (registered in last 24 hours)
        let isNew = false;
        if (patient.registeredDate) {
            const registeredTime = new Date(patient.registeredDate).getTime();
            const now = new Date().getTime();
            const hoursDiff = (now - registeredTime) / (1000 * 60 * 60);
            isNew = hoursDiff < 24;
        }
        
        return `
        <div class="patient-card">
            <div class="patient-header">
                <div class="patient-info">
                    <h3>
                        ${patient.name}
                        ${isNew ? '<span class="new-badge">🆕 NEW</span>' : ''}
                    </h3>
                    <p>${patient.email}</p>
                </div>
                <div class="patient-id">ID: ${patient.id}</div>
            </div>
            <div class="patient-details">
                <span>📅 Age: ${patient.age}</span>
                <span>🩸 Blood: ${patient.bloodType}</span>
                <span>⚕️ Gender: ${patient.gender}</span>
            </div>
            <div class="patient-conditions">
                <strong>Conditions:</strong> ${patient.chronicDiseases.join(', ') || 'None'}
            </div>
            <div class="patient-allergies">
                <strong>Allergies:</strong> ${patient.allergies.join(', ') || 'None'}
            </div>
            <button class="view-btn" onclick="viewPatientRecords('${patient.id}')">View Records</button>
        </div>
        `;
    }).join('');

    document.getElementById('patientsList').innerHTML = html;
}

function loadAllRecords() {
    const html = mockData.records.map(record => `
        <div class="record-row">
            <div class="record-row-info">
                <span class="record-icon">${getRecordIcon(record.type)}</span>
                <div class="record-row-details">
                    <strong>${record.title}</strong>
                    <p>Patient: ${mockData.patients.find(p => p.id === record.patientId)?.name || 'Unknown'} | ${record.facilityName}</p>
                    <small>${formatDate(record.date)}</small>
                </div>
            </div>
            <div class="record-row-status">${record.status || 'Pending'}</div>
        </div>
    `).join('');

    document.getElementById('allRecordsList').innerHTML = html;
}

function loadAnalytics() {
    document.getElementById('totalPatients').textContent = mockData.patients.length;
    document.getElementById('activeRecords').textContent = mockData.records.length;
    document.getElementById('connectedFacilities').textContent = mockData.facilities.length;
    document.getElementById('testsConducted').textContent = mockData.records.filter(r => r.type === 'lab').length;
}

function loadFacilities() {
    const html = mockData.facilities.map(facility => `
        <div class="facility-card">
            <div class="facility-icon">${getFacilityIcon(facility.type)}</div>
            <h3>${facility.name}</h3>
            <p class="facility-type">${facility.type}</p>
            <p class="facility-address">📍 ${facility.address}</p>
            <p class="facility-phone">📞 ${facility.phone}</p>
            <div class="facility-services">
                ${facility.services.map(s => `<span class="service-badge">${s}</span>`).join('')}
            </div>
            <div class="facility-status ${facility.status === 'Connected' ? 'connected' : 'offline'}">
                🔗 ${facility.status}
            </div>
        </div>
    `).join('');

    document.getElementById('facilitiesGrid').innerHTML = html;
}

function populateFacilityFilter() {
    const select = document.getElementById('facilityFilter');
    const facilities = new Set(mockData.records.map(r => r.facilityId));
    
    facilities.forEach(facilityId => {
        const facility = mockData.facilities.find(f => f.id === facilityId);
        if (facility) {
            const option = document.createElement('option');
            option.value = facilityId;
            option.textContent = facility.name;
            select.appendChild(option);
        }
    });
}

function switchTab(tab) {
    currentTab = tab;
    
    // Hide all tabs
    document.querySelectorAll('.tab-panel').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tab).classList.add('active');
    event.target.classList.add('active');
}

function switchRecordType(type) {
    currentRecordType = type;
    
    // Update button states
    document.querySelectorAll('.record-tab').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Load records
    if (currentRole === 'admin') {
        displayRecordsByType(mockData.records, type);
    } else {
        const patientRecords = mockData.records.filter(r => r.patientId === 'P001');
        displayRecordsByType(patientRecords, type);
    }
}

function switchAdminTab(tab) {
    currentAdminTab = tab;
    
    // Hide all admin content
    document.getElementById('patientsTab').style.display = 'none';
    document.getElementById('recordsTab').style.display = 'none';
    document.getElementById('analyticsTab').style.display = 'none';
    
    // Update button states
    document.querySelectorAll('.admin-tab').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show selected tab
    if (tab === 'patients') document.getElementById('patientsTab').style.display = 'block';
    if (tab === 'records') document.getElementById('recordsTab').style.display = 'block';
    if (tab === 'analytics') document.getElementById('analyticsTab').style.display = 'block';
}

function filterRecords() {
    const facilityId = document.getElementById('facilityFilter').value;
    let records = mockData.records;
    
    if (currentRole !== 'admin') {
        records = records.filter(r => r.patientId === 'P001');
    }
    
    if (facilityId) {
        records = records.filter(r => r.facilityId === facilityId);
    }
    
    displayRecordsByType(records, currentRecordType);
}

function searchPatients() {
    const query = document.getElementById('patientSearch').value.toLowerCase();
    const filtered = mockData.patients.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.email.toLowerCase().includes(query) ||
        p.id.toLowerCase().includes(query)
    );
    
    const html = filtered.map(patient => `
        <div class="patient-card">
            <div class="patient-header">
                <div class="patient-info">
                    <h3>${patient.name}</h3>
                    <p>${patient.email}</p>
                </div>
                <div class="patient-id">ID: ${patient.id}</div>
            </div>
            <div class="patient-details">
                <span>📅 Age: ${patient.age}</span>
                <span>🩸 Blood: ${patient.bloodType}</span>
                <span>⚕️ Gender: ${patient.gender}</span>
            </div>
            <div class="patient-conditions">
                <strong>Conditions:</strong> ${patient.chronicDiseases.join(', ') || 'None'}
            </div>
            <div class="patient-allergies">
                <strong>Allergies:</strong> ${patient.allergies.join(', ') || 'None'}
            </div>
            <button class="view-btn" onclick="viewPatientRecords('${patient.id}')">View Records</button>
        </div>
    `).join('');
    
    document.getElementById('patientsList').innerHTML = html || '<p class="no-data">No patients found</p>';
}

function viewPatientRecords(patientId) {
    const patient = mockData.patients.find(p => p.id === patientId);
    const patientRecords = mockData.records.filter(r => r.patientId === patientId);
    
    const html = `
        <div class="patient-modal-header">
            <h3>${patient.name}</h3>
            <p>Patient ID: ${patient.id}</p>
        </div>
        <div class="patient-modal-info">
            <div class="info-grid">
                <div><strong>DOB:</strong> ${patient.dob}</div>
                <div><strong>Age:</strong> ${patient.age}</div>
                <div><strong>Blood Type:</strong> ${patient.bloodType}</div>
                <div><strong>Gender:</strong> ${patient.gender}</div>
                <div><strong>Phone:</strong> ${patient.phone}</div>
                <div><strong>Email:</strong> ${patient.email}</div>
            </div>
        </div>
        <div class="patient-modal-records">
            <h4>Medical Records</h4>
            ${patientRecords.map(record => createRecordCard(record)).join('')}
        </div>
    `;
    
    document.getElementById('patientDetails').innerHTML = html;
    document.getElementById('patientModal').style.display = 'block';
}

function closePatientModal() {
    document.getElementById('patientModal').style.display = 'none';
}

function getRecordIcon(type) {
    const icons = {
        'lab': '🔬',
        'imaging': '📸',
        'medical': '📋',
        'prescriptions': '💊',
        'appointments': '📅'
    };
    return icons[type] || '📄';
}

function getActivityIcon(type) {
    const icons = {
        'lab': '🔬',
        'imaging': '📸',
        'medical': '⚕️',
        'prescription': '💊'
    };
    return icons[type] || '📄';
}

function getFacilityIcon(type) {
    const icons = {
        'Hospital': '🏥',
        'Clinic': '🏢',
        'Laboratory': '🔬',
        'Imaging Center': '📸'
    };
    return icons[type] || '🏢';
}

// ===== APPOINTMENT BOOKING FUNCTIONS =====

function loadAppointmentFacilities() {
    if (currentRole === 'user') {
        const html = mockData.facilities.map(facility => `
            <div class="appointment-facility-card">
                <div class="facility-info">
                    <h3>${facility.name}</h3>
                    <p class="facility-type">${facility.type}</p>
                    <p class="facility-address">📍 ${facility.address}</p>
                    <p class="facility-phone">📞 ${facility.phone}</p>
                    <div class="facility-services-list">
                        ${facility.services.map(s => `<span class="service-badge">${s}</span>`).join('')}
                    </div>
                </div>
                <button class="book-appointment-btn" onclick="openAppointmentModal('${facility.id}', '${facility.name}')">
                    📅 Book Appointment
                </button>
            </div>
        `).join('');

        document.getElementById('facilitiesAppointmentGrid').innerHTML = html;
        loadUserAppointments();
    }
}

function openAppointmentModal(facilityId, facilityName) {
    document.getElementById('appointmentFacility').value = facilityName;
    document.getElementById('appointmentModal').style.display = 'block';
    document.getElementById('appointmentForm').dataset.facilityId = facilityId;
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('appointmentDate').min = today;
}

function closeAppointmentModal() {
    document.getElementById('appointmentModal').style.display = 'none';
    document.getElementById('appointmentForm').reset();
}

function submitAppointment(event) {
    event.preventDefault();

    const facilityId = document.getElementById('appointmentForm').dataset.facilityId;
    const facility = mockData.facilities.find(f => f.id === facilityId);
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const serviceType = document.getElementById('appointmentService').value;
    const reason = document.getElementById('appointmentReason').value;

    if (!appointmentDate || !appointmentTime || !serviceType || !reason) {
        alert('Please fill in all fields');
        return;
    }

    // Create appointment object
    const appointment = {
        id: 'APT' + Date.now(),
        patientId: currentUser.id,
        patientName: currentUser.name,
        patientEmail: currentUser.email,
        facilityId: facilityId,
        facilityName: facility.name,
        date: appointmentDate,
        time: appointmentTime,
        serviceType: serviceType,
        reason: reason,
        status: 'Pending',
        bookedDate: new Date().toISOString()
    };

    // Save appointment to localStorage
    let userAppointments = JSON.parse(localStorage.getItem('userAppointments')) || [];
    userAppointments.push(appointment);
    localStorage.setItem('userAppointments', JSON.stringify(userAppointments));

    // Create notification for admin
    let adminNotifications = JSON.parse(localStorage.getItem('adminNotifications')) || [];
    adminNotifications.push({
        id: 'N' + Date.now(),
        type: 'new_appointment',
        message: 'New appointment request from ' + currentUser.name + ' at ' + facility.name,
        appointmentId: appointment.id,
        patientName: currentUser.name,
        patientEmail: currentUser.email,
        facilityName: facility.name,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime,
        reason: reason,
        timestamp: new Date().toISOString(),
        read: false
    });
    localStorage.setItem('adminNotifications', JSON.stringify(adminNotifications));

    alert('✓ Appointment request submitted! Admin will confirm shortly.');
    closeAppointmentModal();
    loadUserAppointments();
}

function loadUserAppointments() {
    if (currentRole === 'user') {
        let userAppointments = JSON.parse(localStorage.getItem('userAppointments')) || [];
        let myAppointments = userAppointments.filter(a => a.patientId === currentUser.id);

        if (myAppointments.length === 0) {
            document.getElementById('bookedAppointmentsList').innerHTML = '<p class="no-data">No appointments booked yet</p>';
        } else {
            const html = myAppointments.map(apt => `
                <div class="appointment-card ${apt.status.toLowerCase()}">
                    <div class="appointment-header">
                        <h4>${apt.facilityName}</h4>
                        <span class="appointment-status">${apt.status}</span>
                    </div>
                    <div class="appointment-details">
                        <p><strong>Service:</strong> ${apt.serviceType}</p>
                        <p><strong>Date:</strong> ${new Date(apt.date).toLocaleDateString()}</p>
                        <p><strong>Time:</strong> ${apt.time}</p>
                        <p><strong>Reason:</strong> ${apt.reason}</p>
                    </div>
                    ${apt.status === 'Pending' ? `<button class="cancel-btn" onclick="cancelAppointment('${apt.id}')">Cancel Request</button>` : ''}
                </div>
            `).join('');
            document.getElementById('bookedAppointmentsList').innerHTML = html;
        }
    }
}

function cancelAppointment(appointmentId) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
        let userAppointments = JSON.parse(localStorage.getItem('userAppointments')) || [];
        userAppointments = userAppointments.filter(a => a.id !== appointmentId);
        localStorage.setItem('userAppointments', JSON.stringify(userAppointments));
        
        alert('Appointment cancelled');
        loadUserAppointments();
    }
}

function updateServiceOptions() {
    // Can be used to update available times based on service type
}

// ===== END APPOINTMENT BOOKING FUNCTIONS =====

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.removeItem('userInfo');
        window.location.href = 'html.html';
    }
}

// Load alerts
window.addEventListener('load', function() {
    setTimeout(() => {
        const html = mockData.alerts.map(alert => `
            <div class="alert-item alert-${alert.type}">
                <div class="alert-header">
                    <div class="alert-title-section">
                        <span class="alert-icon">${alert.type === 'critical' ? '🔴' : alert.type === 'warning' ? '🟡' : '🔵'}</span>
                        <h4>${alert.title}</h4>
                    </div>
                    <span class="alert-time">${alert.timestamp}</span>
                </div>
                <p class="alert-message">${alert.message}</p>
                <p class="alert-facility">From: ${alert.facilityName}</p>
            </div>
        `).join('');
        
        const alertsContainer = document.getElementById('alertsContainer');
        if (alertsContainer) {
            alertsContainer.innerHTML = html || '<p class="no-data">No alerts</p>';
        }
    }, 100);
});
