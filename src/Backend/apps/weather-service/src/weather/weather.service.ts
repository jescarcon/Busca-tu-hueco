import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class WeatherService {
  private readonly apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqZXN1c2NhcmRlbmFzMjAwMEBnbWFpbC5jb20iLCJqdGkiOiI3MWE2OWUxZi0wZTA1LTRjOWUtOWExYy1hOTMxZjZkNzA1NTYiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTc1NjM2NTg1OSwidXNlcklkIjoiNzFhNjllMWYtMGUwNS00YzllLTlhMWMtYTkzMWY2ZDcwNTU2Iiwicm9sZSI6IiJ9.tgd_E4R3dyD19P-dDMKpG0yJRbiAP1HJ2biP084-MNs';

  constructor(private readonly http: HttpService) {
    console.log('🌟 API_KEY usada:', this.apiKey); // debug
  }

  async getPredictionByCCAA(ccaa: string) {
    console.log('🌟 Solicitando predicción para CCAA:', ccaa);

    const url = `https://opendata.aemet.es/opendata/api/prediccion/ccaa/hoy/${ccaa}/?api_key=${this.apiKey}`;
    console.log('🌟 URL construida:', url);

    try {
      // 1ª petición → obtiene objeto con `datos` (URL real)
      const { data } = await this.http.axiosRef.get(url);
      console.log('🌟 Respuesta inicial de AEMET:', data);

      // 2ª petición → va a la URL de datos para obtener la predicción real
      const predictionRes = await this.http.axiosRef.get(data.datos);
      console.log('🌟 Predicción final recibida');

      return predictionRes.data; // normalmente XML
    } catch (err: any) {
      console.error('❌ Error llamando a AEMET:', err.message);
      throw err;
    }
  }
}
