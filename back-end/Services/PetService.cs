namespace BomPraCachorro.Services;
using BomPraCachorro.Models;
using System.Data.SqlClient;

public class PetService : IPetService
{
    private readonly IConfiguration _configuration;
    // injeção de dependência + acesso às configurações do app
    public PetService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task<List<Pet>> GetAllPets()
    {
        var pets = new List<Pet>();

        string connectionString = _configuration.GetConnectionString("DefaultConnection");

        using (SqlConnection conn = new SqlConnection(connectionString))
        {
            await conn.OpenAsync();

            string query = "SELECT * FROM Pets";

            using (SqlCommand cmd = new SqlCommand(query, conn))
            {
                using (SqlDataReader reader = await cmd.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        pets.Add(new Pet
                        {
                            Id = (int)reader["Id"],
                            Nome = reader["Nome"]?.ToString(),
                            ImagemUrl = reader["ImagemUrl"]?.ToString(),
                            Idade = (int)reader["Idade"],
                            Descricao = reader["Descricao"]?.ToString(),
                            Sexo = reader["Sexo"]?.ToString(),
                            Porte = reader["Porte"]?.ToString(),
                            Raca = reader["Raca"]?.ToString(),
                            Castrado = reader["Castrado"] == DBNull.Value 
                                ? null 
                                : (bool)reader["Castrado"]
                        });
                    }
                }
            }
        }

        return pets;
    }
    public async Task<Pet> GetPet(int id)
    {
        Pet pet = null;

        string connectionString = _configuration.GetConnectionString("DefaultConnection");

        using (SqlConnection conn = new SqlConnection(connectionString))
        {
            await conn.OpenAsync();

            string query = "SELECT * FROM Pets WHERE Id = @id";

            using (SqlCommand cmd = new SqlCommand(query, conn))
            {
                cmd.Parameters.AddWithValue("@id", id);

                using (SqlDataReader reader = await cmd.ExecuteReaderAsync())
                {
                    if (await reader.ReadAsync())
                    {
                        pet = new Pet
                        {
                            Id = (int)reader["Id"],
                            Nome = reader["Nome"]?.ToString(),
                            ImagemUrl = reader["ImagemUrl"]?.ToString(),
                            Idade = (int)reader["Idade"],
                            Descricao = reader["Descricao"]?.ToString(),
                            Sexo = reader["Sexo"]?.ToString(),
                            Porte = reader["Porte"]?.ToString(),
                            Raca = reader["Raca"]?.ToString(),
                            Castrado = reader["Castrado"] == DBNull.Value 
                                ? null 
                                : (bool)reader["Castrado"]
                        };
                    }
                }
            }
        }

        return pet;
    }

    public async Task<Pet> AddPet(Pet pet)
    {
        string connectionString = _configuration.GetConnectionString("DefaultConnection");

        using (SqlConnection conn = new SqlConnection(connectionString))
        {
            await conn.OpenAsync();

            string query = @"
                INSERT INTO Pets (Nome, ImagemUrl, Idade, Descricao, Sexo, Porte, Raca, Castrado)
                OUTPUT INSERTED.Id
                VALUES (@nome, @imagemUrl, @idade, @descricao, @sexo, @porte, @raca, @castrado)";

            using (SqlCommand cmd = new SqlCommand(query, conn))
            {
                cmd.Parameters.AddWithValue("@nome", pet.Nome ?? (object)DBNull.Value);
                cmd.Parameters.AddWithValue("@imagemUrl", pet.ImagemUrl ?? (object)DBNull.Value);
                cmd.Parameters.AddWithValue("@idade", pet.Idade);
                cmd.Parameters.AddWithValue("@descricao", pet.Descricao ?? (object)DBNull.Value);
                cmd.Parameters.AddWithValue("@sexo", pet.Sexo ?? (object)DBNull.Value);
                cmd.Parameters.AddWithValue("@porte", pet.Porte ?? (object)DBNull.Value);
                cmd.Parameters.AddWithValue("@raca", pet.Raca ?? (object)DBNull.Value);
                cmd.Parameters.AddWithValue("@castrado", 
                    pet.Castrado.HasValue ? pet.Castrado : (object)DBNull.Value);

                var insertedId = (int)await cmd.ExecuteScalarAsync();
                pet.Id = insertedId;
            }
        }

        return pet;
    }

    public async Task<Pet> UpdatePet (Pet pet)
    {
        throw new NotImplementedException();
    }

    public async Task<bool> DeletePet (int id)
    {
        throw new NotImplementedException();
    }
}