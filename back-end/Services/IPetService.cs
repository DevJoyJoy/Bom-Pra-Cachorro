namespace BomPraCachorro.Services;
using BomPraCachorro.Models;

public interface IPetService
{
    Task<Pet> GetPet (int id);
    Task<List<Pet>> GetAllPets();
    Task<bool> AddPet (Pet pet);
    Task<bool> UpdatePet (Pet pet);
    Task<bool> DeletePet (int id);
}