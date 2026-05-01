<h1 align="center">🚀 Production-Grade DevSecOps GitOps Pipeline</h1>

<p align="center">
  <b>Code → Build → Scan → Deploy → Observe → Alert → Scale</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/CI-GitHub%20Actions-181717?style=for-the-badge&logo=githubactions&logoColor=white" alt="CI: GitHub Actions" />
  <img src="https://img.shields.io/badge/CD-ArgoCD-EF7B4D?style=for-the-badge&logo=argo&logoColor=white" alt="CD: ArgoCD" />
  <img src="https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
  <img src="https://img.shields.io/badge/Security-Trivy-1904DA?style=for-the-badge&logo=aqua&logoColor=white" alt="Security: Trivy" />
  <img src="https://img.shields.io/badge/Observability-Prometheus%20%2B%20Grafana-E6522C?style=for-the-badge&logo=prometheus&logoColor=white" alt="Observability" />
</p>

---

## ✨ Overview

This project demonstrates an end-to-end, production-style DevSecOps workflow using cloud-native tooling and GitOps principles.

From commit to cluster, every stage is automated:

> Developer Push → GitHub Actions CI → Trivy Scan → Docker Registry → ArgoCD Sync → Kubernetes Deploy → Monitoring + Alerts + HPA

---

## 🧠 Architecture

<p align="center">
  <img width="451" height="961" alt="GitOps1" src="https://github.com/user-attachments/assets/10179323-e54d-4013-aa55-0631d6ad191e" />

</p>

---

## 🧰 Tech Stack

| Category | Tools |
| --- | --- |
| CI | GitHub Actions |
| CD (GitOps) | ArgoCD |
| Containerization | Docker |
| Orchestration | Kubernetes |
| Packaging | Helm |
| Monitoring | Prometheus, Grafana |
| Alerting | Alertmanager, Slack |
| Security | Trivy |

---

## 🔄 Pipeline Flow

1. Developer pushes code to GitHub.
2. GitHub Actions pipeline runs:
   - Build Docker image.
   - Scan image with Trivy.
   - Push secure image to Docker Hub.
3. ArgoCD detects Git changes and syncs manifests.
4. Kubernetes deploys the app and scales using HPA.

---

## 🔐 Security Highlights

- Integrated Trivy image scanning in CI.
- Critical vulnerabilities can be blocked/flagged before deployment.
- Safer release pipeline with shift-left security.

---

## 📊 Monitoring and Alerts

- Prometheus scrapes application and cluster metrics.
- Grafana provides real-time visualization dashboards.
- Alertmanager sends notifications to Slack.

---

## ⚙️ Auto Scaling

- Horizontal Pod Autoscaler is configured.
- Pods scale based on CPU utilization to handle traffic bursts efficiently.

---

## 📁 Project Structure

```text
GitOps-Based-Deployment-System/
|-- app/
|   |-- app.js
|   |-- Dockerfile
|   `-- package.json
|-- argocd/
|   `-- application.yaml
|-- gitops-chart/
|   |-- Chart.yaml
|   |-- values.yaml
|   `-- templates/
|       |-- _helpers.tpl
|       |-- deployment.yaml
|       |-- service.yaml
|       |-- hpa.yaml
|       |-- servicemonitor.yaml
|       |-- alert-rule.yaml
|       |-- serviceaccount.yaml
|       `-- tests/
|-- monitoring/
|   `-- alertmanager-config.yaml
`-- README.md
```

---

## ✅ Key Features

- Fully automated CI/CD pipeline
- GitOps-based continuous deployment
- Security scanning with Trivy
- Real-time observability stack
- Slack-based incident alerting
- Kubernetes HPA auto-scaling
- Helm-based deployment templates

---

## 🧪 Quick Start

```bash
# 1) Start local cluster
minikube start

# 2) Deploy ArgoCD application
kubectl apply -f argocd/application.yaml

# 3) Verify running workloads
kubectl get pods -A
```

---

## 🎯 What You Learn

- Practical CI/CD architecture for real projects
- GitOps operations with ArgoCD
- Kubernetes deployment, scaling, and reliability basics
- Security-first DevOps workflow integration
- Monitoring and incident alerting fundamentals

---

## 🔮 Future Enhancements

- Multi-environment delivery (dev/stage/prod)
- Ingress and domain-based routing
- Progressive delivery (canary/blue-green)
- AI-assisted anomaly detection for observability

---

## 👨‍💻 Author

Gotam Kumar Prajapati