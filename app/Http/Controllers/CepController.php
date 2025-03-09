<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CepController extends Controller
{
    public function buscarCep($cep)
    {
        // Valida o formato do CEP
        if (!preg_match('/^[0-9]{8}$/', $cep)) {
            return response()->json(['error' => 'CEP inválido. Use apenas números.'], 400);
        }

        // Consulta a API ViaCEP
        $response = Http::get("https://viacep.com.br/ws/{$cep}/json/");

        // Verifica se a resposta é válida
        if ($response->failed() || isset($response['erro'])) {
            return response()->json(['error' => 'CEP não encontrado.'], 404);
        }

        return response()->json($response->json());
    }
}
