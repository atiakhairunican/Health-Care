<template>
    <div class="container-fluit">
        <div class="row">
            <div class="card-group">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="bg-fas">
                            <i class="fas fa-hospital fa-5x text-center"></i>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">Hospital Administration</h5>
                        <p class="card-text">A system that will assist health facilities in business processes and optimize their resources..</p>
                        <a href="#" class="card-text"><small class="text-muted">More</small></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="bg-fas">
                            <i class="fas fa-heartbeat fa-5x text-center"></i>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">Clinical Support System</h5>
                        <p class="card-text">Excellent features that support the latest developments in the world of health. EMR complex becomes something that is easily applied and optimized for the needs of health facilities.</p>
                        <a href="#" class="card-text"><small class="text-muted">More</small></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="bg-fas">
                            <i class="fas fa-hand-holding-usd fa-5x text-center"></i>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title">Claim Management System</h5>
                        <p class="card-text">Designed to facilitate health facilities in welcoming the BPJS era including coordination of benefits with other insurance and convenience in managing claims.</p>
                        <a href="#" class="card-text"><small class="text-muted">More</small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'service'
    }
</script>

<style scope>
    .card {
        min-height: 400px;
    }
    .bg-fas {
        width: 100%;
        height: 150px;
        line-height: 200px;
        background-color: rgb(167, 205, 255);
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }
    .bg-fas i {
        margin-left: 140px;
    }
</style>