pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18' // ชื่อต้องตรงกับที่ตั้งไว้ใน Jenkins config
    }

    environment {
        FIREBASE_TOKEN = credentials('864a8622-5616-4320-89c1-2203d9c35ffa')  // ใส่ Firebase token จาก Jenkins Credentials
    }

    stages {
        stage('Clone') {
            steps {
                echo "Cloning repo..."
                checkout scm
            }
        }

        stage('Install') {
            steps {
                dir('frontend') {
                    echo "Installing dependencies..."
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('frontend') {
                    echo "Building React project..."
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                dir('frontend') {
                    echo "Running tests..."
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('frontend') {
                    echo "Deploying to Firebase Hosting..."
                    // ใช้ Firebase token สำหรับ deploy
                    sh "firebase deploy --only hosting --token ${FIREBASE_TOKEN}"
                }
            }
        }
    }
}
