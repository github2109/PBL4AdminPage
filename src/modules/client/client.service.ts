import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetClientFilterDTO } from 'src/models/dtos/get-client-filter.dto';
import { Client } from 'src/models/entities/client.entity';
import { ClientStatus } from 'src/models/enums/client-status.enum';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private repository: Repository<Client>,
  ) {}

  async connect(IPAddress: string): Promise<void> {
    const client = await this.repository.findOne({
      where: [{ IPAddress: IPAddress }],
    });
    if (!client) {
      const doc = this.repository.create({
        IPAddress,
        status: ClientStatus.CONNECT,
      });
      await this.repository.insert(doc);
    } else {
      client.status = ClientStatus.CONNECT;
      await this.repository.save(client);
    }
  }

  async disconnect(IPAddress: string): Promise<void> {
    const client = await this.repository.findOne({
      where: [{ IPAddress: IPAddress }],
    });

    if (client) {
      client.status = ClientStatus.DISCONNECT;
      await this.repository.save(client);
    }
  }

  async getClients(filterDTO: GetClientFilterDTO): Promise<Client[]> {
    const clients = await this.repository.find({
      where: filterDTO,
    });
    return clients;
  }

  async getClientByIP(IPAddress: string): Promise<Client> {
    const client = await this.repository.findOne({
      where: { IPAddress },
    });
    return client;
  }
}
