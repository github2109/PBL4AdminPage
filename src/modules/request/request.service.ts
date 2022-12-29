import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetRequestFilterDTO } from 'src/models/dtos/get-request-filter.dto';
import { Request } from 'src/models/entities/request.entity';
import { RequestStatus } from 'src/models/enums/request-status.enum';
import { Repository } from 'typeorm';
import { ClientService } from '../client/client.service';

@Injectable()
export class RequestService {
  constructor(
    private clientService: ClientService,
    @InjectRepository(Request)
    private repository: Repository<Request>,
  ) {}

  async getRequests(filterDTO: GetRequestFilterDTO): Promise<Request[]> {
    const requests = await this.repository.find({
      where: filterDTO,
    });
    return requests;
  }

  async createRequest(IPAddress: string, data: any): Promise<string> {
    const client = await this.clientService.getClientByIP(IPAddress);
    const request = this.repository.create({
      status: RequestStatus.PENDING,
      client,
      data,
    });
    const saved = await this.repository.save(request);
    return saved.id;
  }

  async updateUnSuccessRequest(IDRequest: string): Promise<void> {
    const request = await this.repository.findOne({ where: { id: IDRequest } });
    request.status = RequestStatus.ERROR;
    await this.repository.save(request);
  }
  async updateSuccessRequest(IDRequest: string): Promise<void> {
    const request = await this.repository.findOne({ where: { id: IDRequest } });
    request.status = RequestStatus.SUCCESS;
    await this.repository.save(request);
  }
}
