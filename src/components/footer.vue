<template>
    <div class="footer container">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <h3>Health-Care Indonesia</h3>
                    <p>
                        18 Parc Place Tower E, Floor 6 <br>
                        Jl. Tulodong Bawah No.5, SCBD <br>
                        Jakarta Selatan, DKI Jakarta 12190 <br>
                        +6221-4000-0507 <br><br>
                        health-care@indonesia.id
                    </p>
                </div>
                <div class="col-lg-4">
                    <img src="../assets/hospitals.png" alt="Hospital">
                    <p>Built, staffed, and equipped for the diagnosis of disease, for the treatment, both medical and surgical, of the sick and the injured and for their housing during this process.</p>
                </div>
                <div class="col-lg-4">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Why Health-Care Indonesia</li>
                        <li>Be an author</li>
                        <li>Community</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
            <hr>
        <p class="copyright">Copyright {{ year }} - Easy Tutorials</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'footer',
        data() {
            return {
                year: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
    .footer {
        background: #000;
        color: #8a8a8a;
        font-size: 14px;
        padding: 60px 20px 40px 50px;
    }
    .footer p {
        color: #8a8a8a;
    }
    .footer h3 {
        color: #fff;
        margin-bottom: 20px;
    }
    .footer img {
        width: 70px;
        margin-bottom: 20px;
    }
    .footer .col-lg-4 {
        text-align: center;
        margin-bottom: 20px;
    }
    ul {
        list-style-type: none;
    }
    .footer hr {
        border: none;
        background: #b5b5b5;
        height: 1px;
        margin: 20px 0;
    }
    .copyright {
        text-align: center;
    }
</style>
