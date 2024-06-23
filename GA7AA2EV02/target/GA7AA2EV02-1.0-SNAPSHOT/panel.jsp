<%-- 
    Document   : panel
    Created on : 23 jun 2024, 2:29:25 a.m.
    Author     : bonni
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Ufollow</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"/>
    </head>
    <body>
            <%
            if (session.getAttribute("first_name")==null){
            response.sendRedirect("index.html");
            return;
            }
            %>
            
            <main class="container-fluid"> 
                <h1 style="text-align: center;">Bienvenido</h1>
            </main>

            <main class="container-fluid">
                <nav>
                    <ul>
                        <li><strong>U Follow</strong></li>
                    </ul>
                    <ul>
                        <li><a href="panel.jsp">Dashboard</a></li>
                        <li><a href="#">Checkpoints</a></li>
                        <li><a href="#">Drivers</a></li>
                        <li><a href="#">Routes</a></li>
                        <li><a href="#">Users</a></li>
                        <li><a href="#">Vehicles</a></li>
                    </ul>
                </nav>
            </main>


            <br>
            <main class="container-fluid">

                <main class="container-fluid">

                    <h2>Dashboard</h2>
                    <br>
                    <h5>Filtros</h5>
                    <hr>

                    <div>
                        <label  for="start-date">Fecha de inicio</label>
                        <input  type="date">
                    </div>

                    <div>
                        <label  for="final-date">Fecha de finalización</label>
                        <input type="date">
                    </div>

                    <div>
                        <label for="route-state">Estado de la ruta</label>
                        <select name="route-state" id="route-satte">
                            <option value="pendiente">Ninguno</option>
                            <option value="pendiente">Todos</option>
                            <option value="pendiente">Pendiente</option>
                            <option value="en-proceso">En proceso</option>
                            <option value="temrinada">Terminada</option>
                            <option value="incompleta">Incompleta</option>
                        </select>

                    </div>

                    <div>
                        <label for="driver-name">Conductor</label>
                        <select name="conductores" id="conductores">
                            <option value="pendiente">Ninguno</option>
                            <option value="pendiente">Todos</option>
                            <option value="conductor">Conductor 1</option>
                            <option value="conductor">Conductor 2</option>
                        </select>
                    </div>

                    <div>
                        <button type="submit">Filtrar</button>
                    </div>

                </main>
            </main>
    </body>
</html>
