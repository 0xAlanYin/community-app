# AI破局俱乐部小程序后端服务

## 项目简介
AI破局俱乐部小程序后端服务，提供用户管理、活动管理等功能。

## 技术栈
- Spring Boot 3.2.3
- PostgreSQL
- Spring Data JPA
- Swagger/OpenAPI
- Lombok

## 环境要求
- JDK 17+
- Maven 3.6+
- PostgreSQL 12+

## 快速开始

### 1. 数据库配置
1. 创建PostgreSQL数据库：
```sql
CREATE DATABASE aipoju;
```

2. 执行数据库初始化脚本：
```bash
psql -d aipoju -f src/main/resources/db/init.sql
```

### 2. 配置文件
检查 `src/main/resources/application.yml` 中的数据库配置是否正确：
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/aipoju
    username: postgres
    password: postgres
```

### 3. 编译运行
```bash
# 编译
mvn clean package

# 运行
java -jar target/ai-community-backend-1.0.0.jar
```

## API文档
启动服务后访问：http://localhost:8080/swagger-ui.html

## 主要功能
- 用户管理
  - 用户注册
  - 用户信息更新
  - 用户信息查询

- 活动管理
  - 活动创建
  - 活动更新
  - 活动删除
  - 活动列表查询
  - 活动详情查询

- 用户活动管理
  - 活动报名
  - 报名状态查询
  - 用户活动列表查询

## 开发团队
- 产品经理：XXX
- 后端开发：XXX
- 前端开发：XXX
- 设计师：XXX

## 版本历史
- v1.0.0 (2024-03-xx)
  - 初始版本发布
  - 实现基础功能 