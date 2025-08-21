import { UsuarioDto } from "src/presentation/dto/usuario.dto";
import { Usuario } from "../entity/usuario.entity";

export class UsuarioMapper{
    static toDto(entity: Usuario): UsuarioDto{
        return {
            id: entity.id,
            username: entity.username,
            rol: entity.rol,
            token: entity.token
        };
    }
}