using System.Collections.Generic;
using System.Threading.Tasks;
using design263API.DTOs;
using design263API.Entities;

namespace design263API.Interfaces
{
    public interface IUserRepository
    {
        void Update (AppUser user);

        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser> GetUserByIdAsync(int id);
        Task<AppUser> GetUserByUsernameAsync(string username);
        Task<IEnumerable<MemberDto>>GetMembersAsync();
        Task<MemberDto>GetMemberAsync(string username);
    }
}
