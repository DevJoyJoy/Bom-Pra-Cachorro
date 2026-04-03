namespace BomPraCachorro.Services;

using BomPraCachorro.Models;
using Microsoft.Data.SqlClient;
using System.Data;

public class PetService : IPetService
{
    private readonly string _connectionString;

    public PetService(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("DefaultConnection");
    }

    public async Task<List<Pet>> GetAllPets()
    {
        var pets = new List<Pet>();

        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        using var cmd = new SqlCommand("[dbo].[SP_SEL_all_pets]", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        using var reader = await cmd.ExecuteReaderAsync();

        while (await reader.ReadAsync())
        {
            pets.Add(MapPet(reader));
        }

        return pets;
    }

    public async Task<Pet?> GetPet(int id)
    {
        Pet? pet = null;

        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        using var cmd = new SqlCommand("[dbo].[SP_SEL_pet_by_id]", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        cmd.Parameters.Add("@id", SqlDbType.Int).Value = id;

        using var reader = await cmd.ExecuteReaderAsync();

        if (await reader.ReadAsync())
        {
            pet = MapPet(reader);
        }

        return pet;
    }

    public async Task<bool> AddPet(Pet pet)
    {
        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        using var cmd = new SqlCommand("[dbo].[SP_INS_pet]", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        cmd.Parameters.Add("@nome", SqlDbType.VarChar).Value = pet.Nome;
        cmd.Parameters.Add("@imagemUrl", SqlDbType.VarChar).Value = pet.ImagemUrl;
        cmd.Parameters.Add("@idade", SqlDbType.Int).Value = (object?)pet.Idade ?? DBNull.Value;
        cmd.Parameters.Add("@descricao", SqlDbType.VarChar).Value = pet.Descricao;
        cmd.Parameters.Add("@sexo", SqlDbType.VarChar).Value = pet.Sexo;
        cmd.Parameters.Add("@porte", SqlDbType.VarChar).Value = pet.Porte;
        cmd.Parameters.Add("@raca", SqlDbType.VarChar).Value = pet.Raca;
        cmd.Parameters.Add("@castrado", SqlDbType.Bit).Value = (object?)pet.Castrado ?? DBNull.Value;

        int rowsAffected = await cmd.ExecuteNonQueryAsync();

        return rowsAffected > 0;
    }

    public async Task<bool> UpdatePet(Pet pet)
    {
        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        using var cmd = new SqlCommand("[dbo].[SP_UPD_pet]", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        cmd.Parameters.Add("@id", SqlDbType.Int).Value = pet.Id;
        cmd.Parameters.Add("@nome", SqlDbType.VarChar).Value = pet.Nome;
        cmd.Parameters.Add("@imagemUrl", SqlDbType.VarChar).Value = pet.ImagemUrl;
        cmd.Parameters.Add("@idade", SqlDbType.Int).Value = (object?)pet.Idade ?? DBNull.Value;
        cmd.Parameters.Add("@descricao", SqlDbType.VarChar).Value = pet.Descricao;
        cmd.Parameters.Add("@sexo", SqlDbType.VarChar).Value = pet.Sexo;
        cmd.Parameters.Add("@porte", SqlDbType.VarChar).Value = pet.Porte;
        cmd.Parameters.Add("@raca", SqlDbType.VarChar).Value = pet.Raca;
        cmd.Parameters.Add("@castrado", SqlDbType.Bit).Value = (object?)pet.Castrado ?? DBNull.Value;

        int rowsAffected = await cmd.ExecuteNonQueryAsync();

        return rowsAffected > 0;
    }

    public async Task<bool> DeletePet(int id)
    {
        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        using var cmd = new SqlCommand("[dbo].[SP_DEL_pet]", connection)
        {
            CommandType = CommandType.StoredProcedure
        };

        cmd.Parameters.Add("@id", SqlDbType.Int).Value = id;

        int rowsAffected = await cmd.ExecuteNonQueryAsync();

        return rowsAffected > 0;
    }

    private Pet MapPet(SqlDataReader reader)
    {
        return new Pet
        {
            Id = reader["Id"] != DBNull.Value ? (int?)reader["Id"] : null,
            Nome = reader["Nome"]?.ToString() ?? string.Empty,
            ImagemUrl = reader["ImagemUrl"]?.ToString() ?? string.Empty,
            Idade = reader["Idade"] != DBNull.Value ? (int?)reader["Idade"] : null,
            Descricao = reader["Descricao"]?.ToString() ?? string.Empty,
            Sexo = reader["Sexo"]?.ToString() ?? string.Empty,
            Porte = reader["Porte"]?.ToString() ?? string.Empty,
            Raca = reader["Raca"]?.ToString() ?? string.Empty,
            Castrado = reader["Castrado"] != DBNull.Value ? (bool?)reader["Castrado"] : null
        };
    }
}
