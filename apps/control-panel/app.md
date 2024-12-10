---
layout: align
title: "Jira & Metrics"
blurb: "Here are some metrics and Jira."
tab: app

enterprise: true
company-subscription: true
control-panel: true
authenticated: true

---
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/date-fns@4.1.0/cdn.min.js"></script>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
<style>
    .table-container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 20px;
    }

    .data-table {
        width: 45%;
    }

    .stat-box {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 20px;
        text-align: center;
        background-color: #f8f9fa;
        margin: 10px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .stat-title {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .stat-number {
        font-size: 2.5rem;
        font-weight: bold;
        color: #007bff;
    }
</style>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


<!-- Start Hero Area -->
<section id="hero-area" class="hero-area admin-invisible hidden">
    <!-- Single Slider -->
    <div class="hero-inner">
        <div class="container">








            <div class="row ">
                <div class="col-lg-6 co-12">
                    <div class="home-slider">
                        <div class="hero-text">
                            <h3 class="wow fadeInUp" data-wow-delay=".3s"
                                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">Admin
                                Console</h3>
                            <h1 class="wow fadeInUp" data-wow-delay=".5s"
                                style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">Please Log
                                In</h1>
                            <p class="wow fadeInUp" data-wow-delay=".7s"
                                style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;">Never miss
                                a match.</p>



                            <div class="button wow fadeInUp" data-wow-delay=".9s"
                                style="visibility: visible; animation-delay: 0.9s; animation-name: fadeInUp;">
                                <span href="http://www.twitter.com/scrumtuous" class="btn primary"><i
                                        class="lni lni-alarm"></i> Metrics Dashboard</span>
                                <span href="https://github.com/scrumtuous" class="btn"><i
                                        class="lni lni-wallet"></i>Admin Panel</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="hero-image">
                        <div class="waves-block">
                            <div class="waves wave-1"></div>
                            <div class="waves wave-2"></div>
                        </div>
                        <img src="assets/images/phone.png" alt="#">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ End Single Slider -->
</section>
<!--/ End Hero Area -->










<section id="testimonials" class="section testimonials style2 admin-visible pt-20">
    <div class="container">



        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chartjs-chart-geo"></script>
        <script src="https://cdn.jsdelivr.net/npm/world-atlas/countries-50m.json"></script>


        <div class="row gy-4">
            <!-- Visitors Over Time -->
            <div class="col-lg-6 col-12">
                <p class="text-center">Visitors Over Time</p>
                <canvas id="visitorsChart"></canvas>
            </div>

            <!-- Top Pages by Views -->
            <div class="col-lg-6 col-12">
                <p class="text-center">Top Pages by Views</p>
                <canvas id="topPagesChart"></canvas>
            </div>

            <!-- Geographic Distribution of Visitors -->
            <div class="col-lg-6 col-12">
                <p class="text-center">Geographic Distribution of Visitors</p>
                <canvas id="geoChart"></canvas>
            </div>

            <!-- Bounce Rate by Day -->
            <div class="col-lg-6 col-12">
                <p class="text-center">Bounce Rate by Day</p>
                <canvas id="bounceRateChart"></canvas>
            </div>
        </div>

        <script>
            const apiBaseUrl = "https://ga.milesahead.today/api";

            // Visitors Over Time Chart
            async function fetchVisitorsOverTime() {
                try {
                    const response = await fetch(`${apiBaseUrl}/visitors-over-time`);
                    const data = await response.json();

                    const labels = Object.keys(data);
                    const values = Object.values(data).map(value => parseInt(value));

                    const ctx = document.getElementById('visitorsChart').getContext('2d');
                    new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Visitors',
                                data: values,
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 2,
                                fill: false
                            }]
                        },
                        options: {
                            responsive: true,
                            scales: {
                                x: { title: { display: true, text: 'Date' } },
                                y: { title: { display: true, text: 'Visitors' }, beginAtZero: true }
                            }
                        }
                    });
                } catch (error) {
                    console.error("Error fetching Visitors Over Time data:", error);
                }
            }

            // Top Pages by Views Chart
            async function fetchTopPages() {
                try {
                    const response = await fetch(`${apiBaseUrl}/top-pages`);
                    const data = await response.json();

                    const labels = Object.keys(data);
                    const values = Object.values(data).map(value => parseInt(value));

                    const ctx = document.getElementById('topPagesChart').getContext('2d');
                    new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Page Views',
                                data: values,
                                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: true,
                            scales: {
                                x: { title: { display: true, text: 'Page' } },
                                y: { title: { display: true, text: 'Views' }, beginAtZero: true }
                            }
                        }
                    });
                } catch (error) {
                    console.error("Error fetching Top Pages data:", error);
                }
            }

            // Geographic Distribution of Visitors Chart
            async function fetchGeographicDistribution() {
                try {
                    const response = await fetch(`${apiBaseUrl}/geo-distribution`);
                    const data = await response.json();

                    const mapData = await fetch("https://cdn.jsdelivr.net/npm/world-atlas/countries-50m.json")
                        .then(res => res.json());

                    const chartData = ChartGeo.topojson.feature(mapData, mapData.objects.countries).features.map((country) => {
                        const countryName = country.properties.name;
                        const visitors = data[countryName] || 0;
                        const color = visitors > 0 ? `rgba(54, 162, 235, ${0.2 + (visitors / 100)})` : 'rgba(211, 211, 211, 0.8)';

                        return { feature: country, value: visitors, color: color };
                    });

                    const ctx = document.getElementById('geoChart').getContext('2d');
                    new Chart(ctx, {
                        type: 'choropleth',
                        data: {
                            labels: Object.keys(data),
                            datasets: [{
                                label: 'Visitors by Country',
                                data: chartData,
                                outline: ChartGeo.topojson.mesh(mapData, mapData.objects.countries),
                                backgroundColor: chartData.map(d => d.color)
                            }]
                        },
                        options: {
                            responsive: true,
                            scales: {
                                projection: { axis: 'x', projection: 'equalEarth' }
                            }
                        }
                    });
                } catch (error) {
                    console.error("Error fetching Geographic Distribution data:", error);
                }
            }

            // Bounce Rate by Day Chart
            async function fetchBounceRate() {
                try {
                    const response = await fetch(`${apiBaseUrl}/bounce-rate`);
                    const data = await response.json();

                    const labels = Object.keys(data);
                    const values = Object.values(data).map(value => parseFloat(value));

                    const ctx = document.getElementById('bounceRateChart').getContext('2d');
                    new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Bounce Rate (%)',
                                data: values,
                                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: true,
                            scales: {
                                x: { title: { display: true, text: 'Date' } },
                                y: { title: { display: true, text: 'Bounce Rate (%)' }, beginAtZero: true }
                            }
                        }
                    });
                } catch (error) {
                    console.error("Error fetching Bounce Rate data:", error);
                }
            }

            // Initialize all charts
            fetchVisitorsOverTime();
            fetchTopPages();
            fetchGeographicDistribution();
            fetchBounceRate();
        </script>











        <div class="row "></div>
        <div class="row">
            <!-- Feedback By App Table -->
            <div class="w-full">
                <div class="flex p-2 mb-2 rounded border justify-self-center gap-x-3 items-center justify-center">
                    <button id="feedback-toggle" class="px-4 py-2 bg-gray-300 rounded" onclick="changeTable('feedback')">Feedback</button>
                    <button id="service-toggle" class="px-4 py-2 rounded" onclick="changeTable('service')">Service Tickets</button>
                </div>
                <div class="flex mb-6">
                    <div id="feedback-table" class="flex flex-col w-full">
                        <!-- <h4>Feedback By App</h4> -->
                        <div class="overflow-x-scroll mb-6">
                            <table id="FeedbackTable" class="table-auto border-collapse w-full">
                                <thead class="bg-gray-200">
                                    <tr>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">App Name</th>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">Submitter</th>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">Ranking</th>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">Received Date</th>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">Completion Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Rows will be inserted here dynamically -->
                                </tbody>
                            </table>
                        </div>
                        <div id="FeedbackTablePagination" class="flex justify-between items-center mt-2">
                            <button class="px-4 py-2 bg-gray-300 rounded"
                                onclick="changePage('FeedbackTable', -1)">Previous</button>
                            <span id="FeedbackTablePageInfo" class="text-gray-700"></span>
                            <button class="px-4 py-2 bg-gray-300 rounded"
                                onclick="changePage('FeedbackTable', 1)">Next</button>
                        </div>
                    </div>
    
                    <div id="service-table" class="flex flex-col hidden w-full">
                        <!-- <h4>Service Tickets</h4> -->
                        <div class="overflow-x-scroll mb-6">
                            <table id="TaskTable" class="table-auto border-collapse w-full">
                                <thead class="bg-gray-200">
                                    <tr>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">App Name</th>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">Submitter</th>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">Ranking</th>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">Received Date</th>
                                        <th class="px-4 py-2 text-left font-semibold text-gray-700">Completion Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Rows will be inserted here dynamically -->
                                </tbody>
                            </table>
                        </div>
                        <div id="TaskTablePagination" class="flex justify-between items-center mt-2">
                            <button class="px-4 py-2 bg-gray-300 rounded"
                                onclick="changePage('TaskTable', -1)">Previous</button>
                            <span id="TaskTablePageInfo" class="text-gray-700"></span>
                            <button class="px-4 py-2 bg-gray-300 rounded" onclick="changePage('TaskTable', 1)">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div>
</section>

<script>
    function countUp(elementId, targetValue, duration) {
        let startValue = 0;
        let increment = targetValue / (duration / 10);
        let currentValue = startValue;

        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(interval);
            }
            document.getElementById(elementId).innerText = Math.floor(currentValue);
        }, 10);
    }

    // Fetch data from the API
    async function fetchStats() {
        try {
            const response = await fetch("https://counts.milesahead.today/api/opportunities/stats");
            const data = await response.json();
            countUp("totalJobsCount", data.totalJobsCount, 2000); // Animate over 2 seconds
            countUp("createdOpportunitiesCount", data.createdOpportunitiesCount, 2000); // Animate over 2 seconds
        } catch (error) {
            console.error("Error fetching stats:", error);
        }
    }

    // Helper function to generate random data within a range
    function getRandomData(num, min, max) {
        return Array.from({ length: num }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    }

    // 1. Daily Sign-ups Chart
    new Chart(document.getElementById('dailySignups'), {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Daily Sign-ups',
                data: getRandomData(7, 10, 50),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }]
        },
        options: { responsive: true }
    });

    // 2.  Notifications Per Day
    new Chart(document.getElementById('opportunityNotifications'), {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Opportunity Notifications Sent',
                data: getRandomData(7, 20, 100),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            }]
        },
        options: { responsive: true }
    });

    // 3. Opportunity Matches Found
    new Chart(document.getElementById('opportunityMatches'), {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Opportunity Matches Found',
                data: getRandomData(7, 10, 50),
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
            }]
        },
        options: { responsive: true }
    });

    // 4. Time on Page (in seconds)
    new Chart(document.getElementById('timeOnPage'), {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Time on Page (seconds)',
                data: getRandomData(7, 30, 300),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true
            }]
        },
        options: { responsive: true }
    });

    // 5. Site Visitors
    new Chart(document.getElementById('siteVisitors'), {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Site Visitors',
                data: getRandomData(7, 100, 1000),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true
            }]
        },
        options: { responsive: true }
    });

    // 6. Country of Origin (Pie Chart)
    new Chart(document.getElementById('countryOfOrigin'), {
        type: 'bar',
        data: {
            labels: ['USA', 'Canada', 'UK', 'Germany', 'India'],
            datasets: [{
                label: 'Country of Origin',
                data: getRandomData(5, 10, 300),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ]
            }]
        },
        options: {
            indexAxis: 'y',  // Makes the bar chart horizontal
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
</script>
<script>
    // Initialize DataTables for both tables
    $(document).ready(function () {
        $('#serviceTickets').DataTable({
            paging: false,
            searching: false,
            info: false
        });
        $('#feedbackTickets').DataTable({
            paging: false,
            searching: false,
            info: false
        });
    });
</script>

<script>
    const rowsPerPage = 10; // Number of rows per page
    const tableData = {
        FeedbackTable: { currentPage: 1, totalRows: 0 },
        TaskTable: { currentPage: 1, totalRows: 0 },
    };

    async function loadFeedbackData(type) {
        try {
            const response = await fetch(`https://jira.milesahead.today/api/jira/issue?${type ? `filter=${encodeURIComponent(`type=${type}`)}` : ""}`);
            const feedbackData = await response.json();

            const tableId = `${type}Table`;
            const tableBody = document.getElementById(tableId).querySelector('tbody');
            tableBody.innerHTML = ''; // Clear any existing rows

            feedbackData.forEach(feedback => {
                const row = document.createElement('tr');
                const dateFormat = dateFns.format(feedback.created, 'MM/dd/yyyy');
                row.className = "bg-white border-b hover:bg-gray-100";
                row.innerHTML = `
                    <td class="px-4 py-2 text-gray-700">${parseDescription(feedback.description, "Service Name")}</td>
                    <td class="px-4 py-2 text-gray-700">${parseDescription(feedback.description, "User's Email")}</td>
                    <td class="px-4 py-2 text-gray-700">${parseDescription(feedback.description, "Rating")}</td>
                    <td class="px-4 py-2 text-gray-700">${parseDescription(feedback.description, "Description of the issue")}</td>
                    <td class="px-4 py-2 text-gray-700">${dateFormat}</td>
                    <td class="px-4 py-2 text-gray-700">${feedback.status}</td>
                `;
                tableBody.appendChild(row);
            });

            // Save total rows and reset to the first page
            tableData[tableId].totalRows = feedbackData.length;
            tableData[tableId].currentPage = 1;

            updatePagination(tableId);

            if (feedbackData.length <= rowsPerPage) {
                document.getElementById(`${type}TablePagination`).classList.add("hidden")
            }
        } catch (error) {
            console.error('Error loading feedback data:', error);
        }
    }

    function parseDescription(description, key) {
        const regex = new RegExp(`- \\*\\*${key}\\*\\*: (.+)`);
        const match = description.match(regex);
        return match ? match[1].trim() : '';
    }

    function updatePagination(tableId) {
        const { currentPage, totalRows } = tableData[tableId];
        const tableBody = document.getElementById(tableId).querySelector('tbody');
        const rows = Array.from(tableBody.children);

        // Hide all rows, then show only the ones for the current page
        rows.forEach((row, index) => {
            row.style.display = (index >= (currentPage - 1) * rowsPerPage && index < currentPage * rowsPerPage) ? '' : 'none';
        });

        // Update page info
        document.getElementById(`${tableId}PageInfo`).textContent = `Page ${currentPage} of ${Math.ceil(totalRows / rowsPerPage)}`;
    }

    function changePage(tableId, direction) {
        const { currentPage, totalRows } = tableData[tableId];
        const totalPages = Math.ceil(totalRows / rowsPerPage);

        // Update the current page if within bounds
        const newPage = currentPage + direction;
        if (newPage > 0 && newPage <= totalPages) {
            tableData[tableId].currentPage = newPage;
            updatePagination(tableId);
        }
    }

    function changeTable(table) {
        if (table === "service") {
            document.getElementById("service-table").classList.remove("hidden")
            document.getElementById("feedback-table").classList.add("hidden")

            document.getElementById("service-toggle").classList.add("bg-gray-300")
            document.getElementById("feedback-toggle").classList.remove("bg-gray-300")
        } else {
            document.getElementById("service-table").classList.add("hidden")
            document.getElementById("feedback-table").classList.remove("hidden")
            
            document.getElementById("service-toggle").classList.remove("bg-gray-300")
            document.getElementById("feedback-toggle").classList.add("bg-gray-300")
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        loadFeedbackData("Feedback");
        loadFeedbackData("Task");
    });
</script>
