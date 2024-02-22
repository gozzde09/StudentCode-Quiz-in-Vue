<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="row justify-content-center" id="the-jumbo">
    <div class="col-md-6">
      <div class="jumbotron">
        <h4 class="display-4">Are you ready to learn?</h4>
        <p class="lead">Here below we have all our different quizzes, want to pick just one or ace them all? It's up to
          you!</p>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center container mb-4">
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Html</h5>
            <p class="card-text">The HTML quiz offers a comprehensive assessment of HTML knowledge, covering topics such
              as tags, attributes, and structure, providing an excellent opportunity for learners to test their
              understanding of web development fundamentals.</p>
            <a href="#" class="btn btn-primary">Go to quiz</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">JavaScript</h5>
            <p class="card-text">The JavaScript quiz presents a dynamic examination, covering essential concepts like DOM
              manipulation, event handling, etc. , making it an
              indispensable tool for developers seeking to strengthen their front-end development expertise.</p>
            <a href="#" class="btn btn-primary">Go to quiz</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">PHP</h5>
            <p class="card-text">The JavaScript quiz presents a dynamic examination of client-side scripting, covering
              essential concepts like DOM manipulation, event handling, etc. , making it an
              indispensable tool for developers seeking to strengthen their expertise.</p>
            <a href="#" class="btn btn-primary">Go to quiz</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Wordpress</h5>
            <p class="card-text">In the WordPress quiz, participants can explore various aspects of the popular content
              management system, including themes, plugins, and customization, making it an ideal resource for those
              interested in mastering website creation with WordPress.</p>
            <a href="#" class="btn btn-primary">Go to quiz</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#the-jumbo {
  margin: auto;
}

.card {
  padding: 10px;
  margin-bottom: 15px;
}

.card-body {
  margin: 6px;
  padding: 10px;
}
</style>
