pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        git 'https://github.com/ramans2026/cypress-ci-cd-project.git'
      }
    }

    stage('Build & Compile') {
      steps {
        sh 'npm install'
      }
    }