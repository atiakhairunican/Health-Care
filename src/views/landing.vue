<template>
    <div id="app">
        <div class="container">
            <Header/>
            <Jumbotron/>
        </div>

        <div class="container" id="registration">
            <div class="row mt-3">
                <div class="col-lg-6">
                    <h3 class="text-info">Registered Users</h3>
                </div>
                <div class="col-lg-6">
                    <button class="btn btn-info float-right" data-toggle="modal" data-target="#addUserModal">
                        <i class="fas fa-user"></i>&nbsp;&nbsp;Add New User
                    </button>
                </div>
            </div>
            <hr class="bg-info">
            <div class="alert alert-danger" v-if="errorMsg">{{ errorMsg }}</div>
            <div class="alert alert-success" v-if="successMsg">{{ successMsg }}</div>

            <div class="row">
                <div class="col-lg-12">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr class="text-center text-light bg-info">
                                <th>NIK</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Religion</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th colspan="3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center" v-for="user in users" :key="user.id">
                                <td>{{ user.nik }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.sex }}</td>
                                <td>{{ user.religion }}</td>
                                <td>{{ user.phone }}</td>
                                <td>{{ user.address }}</td>
                                <td>
                                    <a href="#" class="text-success" data-toggle="modal" data-target="#updateUserModal" @click="selectUser(user);"><i class="fas fa-edit"></i></a>
                                </td>
                                <td>
                                    <a href="#" class="text-danger" data-toggle="modal" data-target="#deleteUserModal" @click="selectUser(user);"><i class="fas fa-trash-alt"></i></a>
                                </td>
                                <td>
                                    <a href="#" class="text-info" data-toggle="modal" data-target="#detailUserModal" @click="selectUser(user);"><i class="fas fa-clipboard"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Add New User Modal -->
        <div class="modal fade" id="addUserModal" tabindex="-1" role="dialog" aria-labelledby="addUserModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addUserModalLabel">Add New User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body pt-4">
                        <form action="#" method="post">
                            <div class="form-group">
                                <input type="text" name="nik" class="form-control form-control-lg" placeholder="NIK" v-model="newUser.nik">
                            </div>
                            <div class="form-group">
                                <input type="text" name="name" class="form-control form-control-lg" placeholder="Name" v-model="newUser.name">
                            </div><div class="input-group mb-3">
                                <div class="input-group-append">
                                    <label class="input-group-text" for="selectAddGender">Gender</label>
                                </div>
                                <select class="custom-select" id="selectAddGender" v-model="newUser.sex">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <label class="input-group-text" for="selectAddReligion">Religion</label>
                                </div>
                                <select class="custom-select" id="selectAddReligion" v-model="newUser.religion">
                                    <option value="Muslim">Muslim</option>
                                    <option value="Christian">Christian</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Buddha">Buddha</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="tel" name="phone" class="form-control form-control-lg" placeholder="Phone" v-model="newUser.phone">
                            </div>
                            <div class="form-group">
                                <input type="text" name="address" class="form-control form-control-lg" placeholder="Address" v-model="newUser.address">
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-info btn-block btn-lg" data-dismiss="modal" @click="addUser(); clearMsg();">Add User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Update User Modal -->
        <div class="modal fade" id="updateUserModal" tabindex="-1" role="dialog" aria-labelledby="updateUserModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateUserModalLabel">Update User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body pt-4">
                        <form action="#" method="post">
                            <div class="form-group">
                                <input type="text" name="nik" class="form-control form-control-lg" v-model="currentUser.nik">
                            </div>
                            <div class="form-group">
                                <input type="text" name="name" class="form-control form-control-lg" v-model="currentUser.name">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <label class="input-group-text" for="selectUpdateGender">Gender</label>
                                </div>
                                <select class="custom-select" id="selectUpdateGender" v-model="currentUser.sex">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <label class="input-group-text" for="selecUpdatetReligion">Religion</label>
                                </div>
                                <select class="custom-select" id="selectUpdateReligion" v-model="currentUser.religion">
                                    <option value="Muslim">Muslim</option>
                                    <option value="Christian">Christian</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Buddha">Buddha</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="tel" name="phone" class="form-control form-control-lg" v-model="currentUser.phone">
                            </div>
                            <div class="form-group">
                                <input type="text" name="address" class="form-control form-control-lg" v-model="currentUser.address">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-info btn-block btn-lg" data-dismiss="modal" @click="updateUser(); clearMsg();">Update User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete User Modal -->
        <div class="modal fade" id="deleteUserModal" tabindex="-1" role="dialog" aria-labelledby="deleteUserModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="deleteUserModalLabel">Delete User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body pt-4">
                        <h5 class="text-danger">Are you sure want to delete this user?</h5>
                        <h6>You are deleting '{{ currentUser.name }}'</h6>
                        <hr>
                        </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger btn-lg" data-dismiss="modal" @click="deleteUser(); clearMsg();">Yes</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button class="btn btn-success btn-lg" data-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Detail User Modal -->
        <div class="modal fade" id="detailUserModal" tabindex="-1" role="dialog" aria-labelledby="detailUserModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="detailUserModalLabel">Detail User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body pt-4">
                        <table class="table table-bordered">
                            <tr class="bg-light">
                                <th>NIK</th>
                                <td>{{ currentUser.nik }}</td>
                            </tr>
                            <tr class="bg-white">
                                <th>Name</th>
                                <td>{{ currentUser.name }}</td>
                            </tr>
                            <tr class="bg-light">
                                <th>Gender</th>
                                <td>{{ currentUser.sex }}</td>
                            </tr>
                            <tr class="bg-white">
                                <th>Religion</th>
                                <td>{{ currentUser.religion }}</td>
                            </tr>
                            <tr class="bg-light">
                                <th>Phone</th>
                                <td>{{ currentUser.phone }}</td>
                            </tr>
                            <tr class="bg-white">
                                <th>Address</th>
                                <td>{{ currentUser.address }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="container" id="doctors">
            <div class="row mt-3">
                <div class="col-lg-6">
                    <h3 class="text-info">Our Doctors</h3>
                </div>
                <div class="col-lg-6">
                    <button class="btn btn-info float-right">
                        Detail &nbsp;&nbsp;<i class="fas fa-arrow-circle-right"></i>
                    </button>
                </div>
            </div>
            <hr class="bg-info">
            <Cards/>
        </div>

        <div class="container" id="service">
            <div class="row mt-3">
                <div class="col-lg-6">
                    <h3 class="text-info">Our Service</h3>
                </div>
                <div class="col-lg-6">
                    <button class="btn btn-info float-right">
                        Detail &nbsp;&nbsp;<i class="fas fa-arrow-circle-right"></i>
                    </button>
                </div>
            </div>
            <hr class="bg-info">
            <Service/>
        </div>

        <div class="container" id="video">
            <Video/>
        </div>
        <div class="container">
            <Footer/>
        </div>
        <div class="up bg-light">
            <a href="#">
                <i class="fas fa-arrow-circle-up fa-3x"></i>
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron'
import Cards from '../components/cards'
import Service from '../components/service'
import Header from '../components/header'
import Video from '../components/video'

    export default {
        name: "home",
        components: {
            Footer,
            Jumbotron,
            Cards,
            Service,
            Header,
            Video
        },
        data() {
            return {
                errorMsg: "",
                successMsg: "",
                users: [],
                newUser: {
                    nik: "",
                    name: "",
                    sex: "",
                    religion: "",
                    phone: "",
                    address: ""
                },
                currentUser: {}
            }
        },
        methods: {
            getAllUsers() {
                axios({
                    method: "get",
                    url: "http://localhost:8000/api/get",
                    headers : {
                        "Content-type" : "application/json"
                    }
                })
                .then((res) => {
                    if (res.data.status.code != 500) {
                        this.users = res.data.result
                    }
                    else {
                        this.errorMsg = res.data.status.message
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            toFormData(obj) {
                let tfd = new FormData()
                for (let i in obj) {
                    tfd.append(i, obj[i])
                }
                return tfd
            },
            addUser() {
                let formData = this.toFormData(this.newUser)
                
                axios({
                    method: "post",
                    url: "http://localhost:8000/api/post",
                    headers : {
                        "Content-type" : "application/json"
                    },
                    data : formData
                })
                .then((res) => {
                    if (res.data.status.code != 500) {
                        this.successMsg = res.data.status.message
                        this.getAllUsers()
                    }
                    else {
                        this.errorMsg = res.data.status.message + "  Note: " + res.data.result
                    }
                }).catch((err) => {
                    console.log(err)
                })

                this.newUser = {
                    nik: "",
                    name: "",
                    sex: "",
                    religion: "",
                    phone: "",
                    address: ""
                }
            },
            selectUser(user) {
                this.currentUser = user
            },
            updateUser() {
                let formData = this.toFormData(this.currentUser)
                
                axios({
                    method: "post",
                    url: "http://localhost:8000/api/update",
                    headers : {
                        "Content-type" : "application/json"
                    },
                    data : formData
                })
                .then((res) => {
                    if (res.data.status.code != 500) {
                        this.successMsg = res.data.status.message
                        this.getAllUsers()
                    }
                    else {
                        this.errorMsg = res.data.status.message
                        this.getAllUsers()
                    }
                }).catch((err) => {
                    console.log(err)
                })

                this.currentUser = {}
            },
            deleteUser() {
                let formData = this.toFormData(this.currentUser)
                
                axios({
                    method: "post",
                    url: "http://localhost:8000/api/delete",
                    headers : {
                        "Content-type" : "application/json"
                    },
                    data : formData
                })
                .then((res) => {
                    if (res.data.status.code != 500) {
                        this.successMsg = res.data.status.message
                        this.getAllUsers()
                    }
                    else {
                        this.errorMsg = res.data.status.message
                    }
                }).catch((err) => {
                    console.log(err)
                })

                this.currentUser = {}
            },
            clearMsg() {
                this.errorMsg = ""
                this.successMsg = ""
            }
        },
        mounted: function() {
            this.getAllUsers();
        }
    }
</script>

<style scoped>
    #registration, #doctors, #service {
        margin-bottom: 50px;
    }
    #registration {
        margin-top: 30px;
    }
    .up {
        position: fixed;
        bottom: 20px;
        right: 10px;
        box-shadow: 0 8px 6px -6px rgba(0, 0, 0, .2);
    }
</style>