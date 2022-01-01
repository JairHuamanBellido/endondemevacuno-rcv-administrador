export default function FormLogin() {
  return (
    <form>
      <input type="email" placeholder="Correo electrónico" />
      <input type="password" placeholder="Contraseña" />
      <div className="forgot-password">
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Recordar sesión
        </label>
      </div>
      <button type="submit">Ingresar</button>
    </form>
  );
}
