import { Navigate, Route, Routes } from "react-router-dom"
import { routes } from "../routes"
import { NOT_FOUND_ROUTE } from "../constants/constants"
import { RouteType } from "../types/RouteType"

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      {routes.map(({ path, component }: RouteType): JSX.Element => <Route key={path} path={path} element={component} /> )}
      <Route path="*" element={<Navigate to={NOT_FOUND_ROUTE} />} />
    </Routes>
  )
}

export default AppRouter