namespace BomPraCachorro.Services;
using BomPraCachorro.Models;

public interface IPetService
{
    Task<Cachorro> GetCachorro (int id);
    Task<List<Cachorro>> GetAllCachorros();
    Task<Cachorro> AddCachorro (Cachorro dog);
    Task<Cachorro> UpdateCachorro (Cachorro dog);
    Task<bool> DeleteCachorro (int id);
}