<?php
class Contact extends controller {
    public function index(){
        $data['judul'] = 'Contact';
        $this->view('templates/header', $data);
        $this->view('contact/index');
        $this->view('templates/footer');
    }
}