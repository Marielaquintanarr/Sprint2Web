# Etapa 1: Construcción de la aplicación
FROM maven:3.9.3-amazoncorretto-17 as build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Etapa 2: Imagen final con JAR
FROM amazoncorretto:17
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
