<template>
    <div class="container-fluit">
        <div class="video">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <h3 class="display-4 font-weight-bold">Let's hear about<br>our story</h3>
                        <p class="lead">
                            The latest information system solutions<br>
                            and health service management.
                        </p>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Let's get started &#8594;</a>
                    </div>
                    <div class="col-sm-7">
                        <iframe width="510" height="300" src="https://www.youtube.com/embed/GKeDpWTm_w0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'video'
    }
</script>

<style scope>
    .video {
        background-color: rgb(215, 215, 255);
        padding: 100px 100px 80px 100px;
    }
    .video h3 {
        font-size: 40px;
    }
    .video p {
        margin-bottom: 60px;
    }
    .video a {
        margin-bottom: 50px;
    }
    video {
        width: 100%;
    }
</style>