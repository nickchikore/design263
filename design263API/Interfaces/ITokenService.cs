using design263API.Entities;

namespace design263API.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);

    }
}