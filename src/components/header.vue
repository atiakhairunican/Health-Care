<template>
    <div class="container-fluit">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/hospitals.png" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#registration">Registration</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#doctors">Doctors</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#service">Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#video">Story</a>
                    </li>
                </ul>
                <ul class="form-inline my-2 my-lg-0">
                    <li><a href="https://web.facebook.com/zi.care" target="_blank">
                        <i class="fab fa-facebook-square fa-2x"></i>
                    </a></li>
                    <li><a href="https://twitter.com/zicare_id" target="_blank">
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </a></li>
                    <li><a href="https://www.instagram.com/zicare_id/" target="_blank">
                        <i class="fab fa-instagram-square fa-2x"></i>
                    </a></li>
                    <li><a href="https://www.linkedin.com/company/zicare/" target="_blank">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </a></li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'header'
    }
</script>

<style scope>
    .navbar {
        padding: 10px;
        box-shadow: 0 8px 6px -6px rgba(0, 0, 0, .2);
    }
    .navbar img {
        width: 70px;
    }
    .form-inline {
        list-style: none;
    }
    .form-inline i {
        margin: 0 5px;
    }
</style>